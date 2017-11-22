import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, Router, withRouter, Redirect } from 'react-router-dom'
import { AsyncLogin, AsyncHome } from './app'
import App from '../components/layouts'

export const PageLayout = ({ history, isAuthenticated, location }) => (
  <Router history={history}>
    <App>
      <Switch>
        <Route
          path="/"
          exact
          location={location}
          render={props =>
            isAuthenticated ? (
              <AsyncHome {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route path="/login" exact component={AsyncLogin} />
      </Switch>
    </App>
  </Router>
)

PageLayout.propTypes = {
  location: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}
export default withRouter(
  connect(state => ({
    isAuthenticated: !!state.auth.token,
  }))(PageLayout),
)
