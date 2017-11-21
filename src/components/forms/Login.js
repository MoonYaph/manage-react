import React, { Component } from 'react'
import { Button, Grid, Form,Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import InlineError from '../messages/InlineError'

class Login extends Component {
  state = {
    data: {
      username: '',
      password: '',
    },
    errors: {},
    loading: false,
  }
  handleChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    })
  handleSubmit = () => {
    const errors = this.validate(this.state.data)
    this.setState({ errors })
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true })
      this.props
        .submit(this.state.data)
        .catch(error =>
          this.setState({ errors: error.response.data, loading: false }),
        )
    }
  }
  validate = data => {
    const errors = {}
    if (!/^[a-z]{6,12}/.test(data.username)) {
      errors.username = 'Invalid username'
    }
    if (!data.password) {
      errors.password = "Password can't be blank"
    }
    return errors
  }
  render() {
    const { data, errors, loading } = this.state

    return (
      <Grid
        verticalAlign="middle"
        centered
        columns={1}
        textAlign="center"
        relaxed
        stretched
        style={{ flexGrow: 1, marginTop: '8em' }}
      >
        <Grid.Row>
          <Grid.Column tablet={10} mobile={16} computer={6}>
            <Form onSubmit={this.handleSubmit} loading={loading}>
              {errors.error && (
                <Message negative>
                  <Message.Header>Something went wrong</Message.Header>
                  <p>{errors.error}</p>
                </Message>
              )}
              <Form.Input
                placeholder="Username"
                name="username"
                label="Username"
                value={data.username}
                onChange={this.handleChange}
                error={!!errors.username}
              />
              {errors.username && <InlineError text={errors.username} />}
              <Form.Input
                autoComplete="current-password"
                placeholder="Password"
                type="password"
                name="password"
                value={data.password}
                label="Password"
                onChange={this.handleChange}
                error={!!errors.password}
              />
              {errors.password && <InlineError text={errors.password} />}
              <div style={{ textAlign: 'center' }}>
                <Button content="Login" color="teal" icon="sign in" />
              </div>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
Login.propTypes = {
  submit: PropTypes.func.isRequired,
}
export default Login
