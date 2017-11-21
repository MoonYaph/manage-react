import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Link, withRouter } from 'react-router-dom'

import { Sidebar, Segment, Menu, Icon, Input } from 'semantic-ui-react'
import './sider.scss'
import { data } from '../utils/config'

class SidebarLeftPush extends Component {
  state = {
    activeItem: '',
  }
  handleClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  render() {
    const { activeItem } = this.state
    const { isAuthenticated, location: { pathname } } = this.props

    const menu = data.map(item => (
      <Menu.Item
        name={item.name}
        link
        as={Link}
        onClick={this.handleClick}
        to={item.route}
        active={activeItem === item.name}
        key={item.id}
      >
        <Icon name={item.icon} />
        {item.name}
      </Menu.Item>
    ))
    return (
      <div>
        <Sidebar
          as={Menu}
          animation="push"
          width="thin"
          visible={!!isAuthenticated && pathname !== '/login'}
          icon="labeled"
          vertical
          className="layout"
        >
          <Link to="/" className="logo">
            <img src="Logo.png" alt="logo" />
          </Link>
          {menu}
        </Sidebar>
        {pathname !== '/login' && (
          <Menu style={{ margin: 0 }}>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                name="log out"
                as={Link}
                to="/login"
                active={activeItem === 'logout'}
                onClick={this.handleClick}
              />
            </Menu.Menu>
          </Menu>
        )}
        <Sidebar.Pusher className="main">
          <Segment basic>{this.props.children}</Segment>
        </Sidebar.Pusher>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  }
}
SidebarLeftPush.propTypes = {
  children: PropTypes.element.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}
export default withRouter(connect(mapStateToProps)(SidebarLeftPush))
