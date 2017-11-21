import * as types from '../constants/auth'
import api from '../api/index'

const userSignup = user => ({
  type: types.SIGNUP,
  user,
})
const userLoggedin = user => ({
  type: types.LOGIN,
  user,
})
const signup = credentials => dispatch =>
  api.signup(credentials).then(user => dispatch(userSignup(user)))

const login = credentials => dispatch =>
  api.login(credentials).then(user => {
    localStorage.JWT_TOKEN = user.token
    dispatch(userLoggedin(user))
  })

export default {
  signup,
  login,
}
