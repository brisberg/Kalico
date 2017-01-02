import React, { Component } from 'react';
import ThingService from '../services/things';
import Title from './title';
import ThingForm from './thingform';
import ThingList from './thinglist'

// Contaner Component
class ThingApp extends Component {

  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      things: []
    }

    // Explicitly bind 'this' to class methods
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    ThingService.getThings().then(function (results) {
      this.setState({things: results})
    }.bind(this))
  }

  // Add thing handler
  handleAdd(val) {
    // Assemble data
    ThingService.createThing(val).then(function (thing) {
      // Update data
      this.state.things.push(thing);
      // Update state
      this.setState({things: this.state.things});
    }.bind(this));
  }

  // Handle remove
  handleRemove(id) {
    ThingService.deleteThing(id).then(function (removed) {
      // Filter all todos except the one to be removed
      const remainder = this.state.things.filter((thing) => {
        return thing._id !== removed._id;
      });
      // Update state with filter
      this.setState({things: remainder});
    }.bind(this));
  }

  render() {
    // Render JSX
    return (
      <div>
        <Title />
        <ThingForm addThing={this.handleAdd} />
        <ThingList
          things={this.state.things}
          removeThing={this.handleRemove}
        />
      </div>
    );
  }
}

export default ThingApp
