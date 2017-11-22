import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp'

const queryArray = (array, key, keyAlias = 'key') => {
  if (!(array instanceof Array)) {
    return null
  }
  const item = array.filter(_ => _[keyAlias] === key)
  if (item.length) {
    return item[0]
  }
  return null
}
const Bread = ({ menu, location }) => {
  // 匹配当前路由
  const pathArray = []
  let current
  menu.forEach(item => {
    if (item.route && pathToRegexp(item.route).exec(location.pathname)) {
      current = item
    }
  })
  const getPathArray = item => {
    pathArray.unshift(item)
    if (item.bpid) {
      getPathArray(queryArray(menu, item.bpid, 'id'))
    }
  }

  const paramMap = {}
  if (!current) {
    pathArray.push(
      menu[0] || {
        id: 1,
        icon: 'laptop',
        name: 'Dashboard',
      },
    )

  } else {
    getPathArray(current)

    const keys = []
    const values = pathToRegexp(current.route, keys).exec(
      location.pathname.replace('#', ''),
    )
    if (keys.length) {
      keys.forEach((currentValue, index) => {
        if (typeof currentValue.name !== 'string') {
          return
        }
        paramMap[currentValue.name] = values[index + 1]
      })
    }
  }
  // 递归查找父级
  const breads = pathArray.map((item, key) => {
    const content = (
      <span>
        {item.icon ? <Icon type={item.icon} style={{ marginRight: 4 }} /> : ''}
        {item.name}
      </span>
    )
    return (
      <Breadcrumb.Item key={key}>
        {pathArray.length - 1 !== key ? (
          <Link to={pathToRegexp.compile(item.route || '')(paramMap) || '#'}>
            {content}
          </Link>
        ) : (
          content
        )}
      </Breadcrumb.Item>
    )
  })

  return (
    <div className="bread">
      <Breadcrumb>{breads}</Breadcrumb>
    </div>
  )
}
Bread.propTypes = {
  menu: PropTypes.arrayOf().isRequired,
  location: PropTypes.shape({

  }).isRequired,
}
export default Bread
