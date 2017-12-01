import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import AddShopForm from '../forms/AddShopForm'
import { fetchCategory } from '../../actions/shop'

class AddShopPage extends Component {
  componentDidMount() {
    // this.props.fetchCategory()
  }
  submit = data => console.log(data)

  render() {
    return (
      <div>
        <AddShopForm submit={this.submit} {...this.props} />
      </div>
    )
  }
}
AddShopPage.propTypes = {
  fetchCategory: PropTypes.func.isRequired,
}
export default connect(({ shop }) => ({ shop }), { fetchCategory })(AddShopPage)
