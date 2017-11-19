import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, Router, withRouter } from 'react-router-dom'
import { AsyncDash, AsyncHome } from './app'
import App from '../layouts'

export const PageLayout = ({ history }) => (
  <Router history={history}>
    <App>
      <Switch>
        <Route path='/' exact component={AsyncHome} />
        <Route path='/counter' exact component={AsyncDash} />
      </Switch>
    </App>
  </Router>
)

PageLayout.propTypes = {
  history: PropTypes.shape({}).isRequired
}
export default withRouter(connect()(PageLayout))
