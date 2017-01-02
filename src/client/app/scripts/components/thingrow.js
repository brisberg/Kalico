import React, { PropTypes } from 'react'

const ThingRow = ({ removeThing, thing }) => (
  <li>
    id:{thing._id}, count:{thing.count}
    <button name='Delete' onClick={() => {
        removeThing(thing._id);
      }}>
      Delete
    </button>
  </li>
)

ThingRow.propTypes = {
  removeThing: PropTypes.func.isRequired,
  thing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired
}

export default ThingRow
