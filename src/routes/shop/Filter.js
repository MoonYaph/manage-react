import React, { Component } from 'react'
import {
  Form,
  Row,
  Col,
  Button,
  Input,
  Modal,
  Cascader,
  DatePicker
} from 'antd'
import options from '../../utils/city'

const { RangePicker } = DatePicker

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16
  }
}

const TwoColProps = {
  ...ColProps,
  xl: 96
}
class Filter extends Component {
  state = {
    visible: false
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Row gutter={24}>
        <Col {...ColProps} xl={{ span: 24 }} md={{ span: 8 }}>
          {getFieldDecorator('name')(
            <Input.Search
              placeholder="Search name"
              size="large"
              onSearch={this.handleSubmit}
            />
          )}
        </Col>

        <Col {...ColProps} sm={{ span: 12 }} xl={{ span: 24 }} md={{ span: 8 }}>
          {getFieldDecorator('address')(
            <Cascader
              size="large"
              style={{ width: '100%' }}
              onChange={() => this.handleChange('address')}
              options={options}
              placeholader="Please piack an address"
            />
          )}
        </Col>
        <Col {...ColProps} xl={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }}>
          {getFieldDecorator('createtime')(
            <RangePicker
              size="large"
              onChange={() => this.handleChange('createtime')}
            />
          )}
        </Col>
        <Col
          {...TwoColProps}
          xl={{ span: 10 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <Button type="primary" size="large" style={{ marginRight: 5 }}>
                Search
              </Button>
              <Button size="large">Reset</Button>
            </div>
            <div>
              <Button type="ghost" size="large" onClick={this.showModal}>
                Create
              </Button>
              <Modal
                title="Add shop"
                visible={this.state.visible}
                onCancel={this.handleCancel}
                onOk={this.handleOk}
              >
                <p>1</p>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Form.create()(Filter)
