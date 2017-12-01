import { ADD_CATEGORY } from '../constants/shop'

const initialState = {
  category: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, category: action.category }
    default:
      return state
  }
}
