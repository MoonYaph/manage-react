import React from 'react'
import { Spin } from 'antd'

import { bool } from 'prop-types'

function Loading(props) {
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      return 'Loader timed out!'
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay.
      return <Spin size="large" />
    }
    // Don't flash "Loading..." when we don't need to.
    return null
  } else if (props.error) {
    // If we aren't loading, maybe
    return 'Error! Component failed to load'
  }
  // This case shouldn't happen... but we'll return null anyways.
  return null
}

Loading.propTypes = {
  isLoading: bool.isRequired,
  timedOut: bool.isRequired,
  pastDelay: bool.isRequired,
  error: bool,
}
Loading.defaultProps = {
  error: false,
}

export default Loading
