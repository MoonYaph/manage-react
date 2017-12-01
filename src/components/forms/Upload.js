import React, { Component } from 'react'
import { Form, Button, Icon, Upload } from 'antd'

class UploadFile extends Component {
  normFile = e => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="Upload">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="file" action="/auth/upload/" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create()(UploadFile)
