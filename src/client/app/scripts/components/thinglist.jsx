import React, { PropTypes } from 'react'
import ThingRow from './thingrow'

const ThingList = ({ things, removeThing }) => (
  <ul>
    {things.map(thing =>
      <ThingRow
        key={ thing._id }
        thing={ thing }
        removeThing={ removeThing }
      />
    )}
  </ul>
)

ThingList.propTypes = {
  things: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired).isRequired,
  removeThing: PropTypes.func.isRequired
}

export default ThingList
