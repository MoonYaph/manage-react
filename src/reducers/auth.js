
import * as types from "../constants/auth";

export default (state = {}, action) => {
  switch (action.type) {
    case types.SIGNUP:
      return action.user
    case types.LOGIN:
      return action.user
    case types.IS_AUTHENTICATED:
      return action.user
    default:
      return state
  }
}
