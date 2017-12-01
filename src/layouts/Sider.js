import React from 'react'
import PropTypes from 'prop-types'
import Menus from './Menu'
import styles from './sider.less'

const Sider = ({
  siderFold,
  darkTheme,
  changeTheme,
  navOpenKeys,
  menu,
  location,
  popover,
  changeOpenKeys,
}) => {
  const menuProps = {
    menu,
    siderFold,
    darkTheme,
    changeTheme,
    navOpenKeys,
    location,
    changeOpenKeys,
    popover,
  }
  return (
    <div>
      <div className={styles.logo}>
        <img alt="logo" src="logo.svg" />
        <span>Manage Design</span>
      </div>
      <Menus {...menuProps} />
    </div>
  )
}
Sider.propTypes = {
  siderFold: PropTypes.bool.isRequired,
  darkTheme: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired,
  changeOpenKeys: PropTypes.func.isRequired,
  navOpenKeys: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  menu: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  location: PropTypes.shape({}).isRequired,
  popover: PropTypes.bool.isRequired,
}
export default Sider
