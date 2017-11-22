import React from 'react'

import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { arrayToTree } from 'utils'
import PropTypes from 'prop-types'

const { SubMenu, Item } = Menu

const Menus = ({ menu, siderFold, darkTheme }) => {
  const menuT = arrayToTree(menu, 'id', 'mpid')
  const levelMap = {}
  const getMenu = menuTree =>
    menuTree.map(item => {
      if (item.children) {
        if (item.mpid) {
          levelMap[item.id] = item.mpid
        }
        return (
          <SubMenu
            key={item.id}
            title={
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span> {item.name}</span>
              </span>
            }
          >
            {getMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Item key={item.id}>
          <Link to={item.route}>
            {item.icon && <Icon type={item.icon} />}
            <span> {item.name}</span>
          </Link>
        </Item>
      )
    })
  const menus = getMenu(menuT)
  return (
    <Menu
      mode={siderFold ? 'vertical' : 'inline'}
      theme={darkTheme ? 'dark' : 'light'}
      className="menu"
      defaultSelectedKeys={['1']}
    >
      {menus}
    </Menu>
  )
}
Menus.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  siderFold: PropTypes.bool.isRequired,
  darkTheme: PropTypes.bool.isRequired,
}
export default Menus
