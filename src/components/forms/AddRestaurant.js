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
} from 'antd'

class AddRestaurant extends Component {
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
    const options = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ]
    const checkboxOptions = [
      '品牌保证',
      '蜂鸟专送',
      '新开店铺',
      '外卖保',
      '准时达',
      '开发票',
    ]
    const config = {
      rules: [
        { type: 'object', required: true, message: 'Please select time!' },
      ],
    }
    console.info(this.props.location)
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
          {getFieldDecorator('restaurant classify', {
            rules: [
              {
                type: 'array',
                required: true,
                message: 'please choose your classify',
              },
            ],
          })(<Cascader options={options} />)}
        </Form.Item>
        <Form.Item label="店铺特点" hasFeedback {...formItemLayout}>
          {getFieldDecorator('restaurant attribute')(
            <Checkbox.Group options={checkboxOptions} />,
          )}
        </Form.Item>
        <Form.Item label="配送费" hasFeedback {...formItemLayout}>
          <InputNumber min={1} defaultValue={5} />
        </Form.Item>
        <Form.Item label="起送价" hasFeedback {...formItemLayout}>
          <InputNumber min={1} defaultValue={20} />
        </Form.Item>
        <Form.Item {...formItemLayout} label="营业时间">
          {getFieldDecorator('time-picker', config)(
            <TimePicker placeholder="起始时间" />,
          )}
        </Form.Item>
        <Form.Item {...formItemLayout} label="上传店铺头像">
          {getFieldDecorator('avatar')(
            <Upload name="file" action="/api/upload/" listType="picture">
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
}
export default Form.create()(AddRestaurant)
