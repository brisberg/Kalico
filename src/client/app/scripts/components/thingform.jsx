import React, { PropTypes } from 'react'

const ThingForm = ({ addThing }) => {
  // Input tracker
  let input;

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addThing(input.value);
        input.value = '';
      }}>
        +
      </button>
    </div>
  );
};

ThingForm.propTypes = {
  addThing: PropTypes.func.isRequired
}

export default ThingForm;
