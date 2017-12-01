import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.less'

const InlineError = ({ text }) => <div className={styles.sider}>{text}</div>
InlineError.propTypes = {
  text: PropTypes.string.isRequired
}
export default InlineError
