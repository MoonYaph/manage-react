import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'antd'
import { onFilterChange, onSwitchMotion } from 'actions/shop'
import Filter from './Filter'

const Shop = ({ location, shop }) => {
  const {
    currentItem,
    modalVisible,
    modalType,
    selectedRowKeys,
    list,
    pagination,
    isMotion,
  } = shop
  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    title: `${modalType === 'create' ? 'Create Shop' : 'Update Shop'}`,
    wrapClassName: 'veritical-center-modal',
  }

  const listProps = {
    dataSource: list,
    pagination,
    location,
    isMotion,
  }
  const filterProps = {
    isMotion,
    onFilterChange,
    onSwitchMotion,
    filter: {
      ...location.query,
    },
  }
  return (
    <div style={{ padding: '24px' }}>
      <Filter />
    </div>
  )
}

export default connect(({ shop }) => ({ shop }), {
  onFilterChange,
  onSwitchMotion,
})(Shop)
