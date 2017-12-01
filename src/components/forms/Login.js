import React from 'react'

import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FormItem = Form.Item

class LoginForm extends React.Component {
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

    return (
      <div className="login-form">
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                placeholder="Username"
              />,
            )}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ],
            })(
              <Input
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Link className="login-form-forgot" to="/forgot">
              Forgot password
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/signup">register now!</Link>
          </FormItem>
        </Form>
      </div>
    )
  }
}
LoginForm.propTypes = {
  form: PropTypes.shape({
    validateFields: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
  }).isRequired,
  submit: PropTypes.func.isRequired,
}
export default Form.create()(LoginForm)
