import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Sider from './Sider'
import './sider.scss'
import Header from './Header'
import Bread from './Bread'

const App = ({ children, app, dispatch, location, isAuthenticated }) => {
  const { menu, siderFold, darkTheme, isNavbar, navOpenKeys } = app

  const siderProps = {
    menu,
    location,
    siderFold,
    darkTheme,
    navOpenKeys,
    changeTheme() {
      dispatch({ type: 'app/switchTheme' })
    },
    changeOpenKeys(openKeys) {
      dispatch({ type: 'app/handleNavOpenKeys', openKeys })
    },
  }
  const headerProps = {
    menu,
    location,
    siderFold,
    isNavbar,
    navOpenKeys,
    changeMode() {
      dispatch({ type: 'changeMode' })
    },
  }
  return (
    <div className="layout">
      {!isNavbar && isAuthenticated ? (
        <aside className="aside">
          {menu.length === 0 ? null : <Sider {...siderProps} />}
        </aside>
      ) : (
        ''
      )}
      <div className="main">
        {isAuthenticated && (
          <div>
            <Header {...headerProps} />
            <Bread menu={menu} location={location} />
          </div>
        )}
        <div className="container">
          <div className="content">{children}</div>
        </div>
      </div>
    </div>
  )
}
App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({}).isRequired,
  app: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}
const mapStateToProps = state => ({
  app: state.app,
  isAuthenticated: !!state.auth.token,
})

export default withRouter(connect(mapStateToProps)(App))
