const initialStore = ''

const reducer = (store = initialStore, action) => {
  if(action.type === 'FILTER') {
    return action.filter
  }
  return store
}

export const filterAdder = (filter) => {
  return {
    type: 'FILTER',
    filter: filter
  }
}

export default reducer