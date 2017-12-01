import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Form,
  Input,
  Cascader,
  Checkbox,
  InputNumber,
  TimePicker,
  Upload,
  Button,
  Icon,
  message,
} from 'antd'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
}

class AddRestaurant extends Component {
  state = {
    options: ['品牌保证', '蜂鸟专送', '新开店铺', '外卖保', '准时达', '开发票'],
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props
          .submit(values)
          .catch(error => message.error(error.response.data.error))
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { category } = this.props.shop
    const { options } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="店铺" hasFeedback {...formItemLayout}>
          {getFieldDecorator('restaurant', {
            rules: [
              {
                required: true,
                message: 'Please input your restaurant!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="详细地址" hasFeedback {...formItemLayout}>
          {getFieldDecorator('address', {
            rules: [
              {
                required: true,
                message: 'Please input your address!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="联系方式" hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            rules: [
              {
                required: true,
                pattern: /^1[3458]\d{9}/,
                message: 'Please input your phone!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="店铺简介" hasFeedback {...formItemLayout}>
          {getFieldDecorator('description', {
            rules: [
              {
                required: true,
                message: 'Please input your description!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="店铺分类" hasFeedback {...formItemLayout}>
          {getFieldDecorator('restaurant_classify', {
            rules: [
              {
                type: 'array',
                required: true,
                message: 'please choose your classify',
              },
            ],
          })(<Cascader options={category} />)}
        </Form.Item>
        <Form.Item label="店铺特点" hasFeedback {...formItemLayout}>
          {getFieldDecorator('restaurant_attribute')(
            <Checkbox.Group options={options} />,
          )}
        </Form.Item>
        <Form.Item label="配送费" hasFeedback {...formItemLayout}>
          {getFieldDecorator('delivery_fee')(<InputNumber min={1} />)}
        </Form.Item>
        <Form.Item label="起送价" hasFeedback {...formItemLayout}>
          {getFieldDecorator('delivery_start_fee')(<InputNumber min={1} />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="营业时间">
          {getFieldDecorator('start_time')(
            <TimePicker
              placeholder="起始时间"
              hideDisabledOptions
              disabledSeconds={() => []}
            />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="上传店铺头像">
          {getFieldDecorator('file')(
            <Upload name="file" action="/auth/upload/" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>
        <Form.Item label="优惠活动" {...formItemLayout}>
          s
        </Form.Item>
        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" htmlType="submit">
            创建
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
AddRestaurant.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
    validateFields: PropTypes.func.isRequired,
  }).isRequired,
  shop: PropTypes.shape({
    category: PropTypes.array.isRequired,
  }).isRequired,
  submit: PropTypes.func.isRequired,
}
export default Form.create()(AddRestaurant)
