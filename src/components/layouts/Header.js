import React from 'react'
import { Menu, Icon } from 'antd'

const Header = () => (
  <div className="header-right">
    <div className='header-user'>
      <Menu mode="horizontal">
        <Menu.SubMenu
          style={{
            float: 'right',
          }}
          title={
            <span>
              <Icon type="user" />
              1
            </span>
          }
        >
          <Menu.Item key="logout">Sign out</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  </div>
)

export default Header
