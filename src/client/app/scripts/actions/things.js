export const createThing = (count) => ({
  type: 'CREATE_THING',
  count: count
})

export const deleteThing = (id) => ({
  type: 'DELETE_THING',
  id: id
})

export const getThings = () => ({
  type: 'GET_THINGS'
})
