import React from 'react'
import PropTypes from 'prop-types'

const InlineError = ({ text }) => <div style={{ color: '#9f3a38' }}>{text}</div>
InlineError.propTypes = {
  text: PropTypes.string.isRequired,
}
export default InlineError
