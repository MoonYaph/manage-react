import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import action from '../../actions/auth'
import Login from '../forms/Login'

const LoginPage = ({ login, history}) => {
  const submit = (data) => login(data).then(() => history.push('/'))
  return <Login submit={submit} />
 }

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
}
export default connect(null, { login: action.login })(LoginPage)
