import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Sider from './Sider'
import './sider.scss'
import Header from './Header'
import Bread from './Bread';

const App = ({ children, app, dispatch, location }) => {
  const {
    menu,
    siderFold,
    darkTheme,
    isNavbar,
    navOpenKeys,
    isAuthenticated,
  } = app

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
      {!isNavbar ? (
        <aside className='aside'>
          {menu.length === 0 ? null : <Sider {...siderProps} />}
        </aside>
      ) : (
        ''
      )}
      <div className="main">
        <Header {...headerProps} />
        <Bread menu={menu} location={location} />
        <div className="container">
          <div className="content">{isAuthenticated ? children : ''}</div>
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
}
export default withRouter(connect(({ app }) => ({ app }))(App))
