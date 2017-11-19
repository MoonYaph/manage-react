import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <h1>React Redux Starter Kit</h1>
    <Link to='/' >Home</Link>
    {' · '}
    <Link to='/counter' >Counter</Link>
    <div >
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
