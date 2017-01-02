const things = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_THING':
      return [
        ...state,
        {
          id: action.id,
          count: action.count

        }
      ]
    case 'DELETE_THING':
      return state.map(t =>
        todo(t, action)
      )
    case 'GET_THINGS':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default things
