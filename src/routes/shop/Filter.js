import React from 'react'
import { Form, Row, Col, Button, Input, Cascader, DatePicker } from 'antd'
import options from 'utils/city'

const { RangePicker } = DatePicker

const ColProps = {
  xs: 24,
  sm: 12,
  style: {
    marginBottom: 16,
  },
}

const TwoColProps = {
  ...ColProps,
  xl: 96,
}
const Filter = ({ form: { getFieldDecorator, getFieldsValue } }) => {
  const handleFields = fields => {
    const { createTime } = fields
    if (createTime && createTime.length) {
      fields.createTime = [
        createTime[0].format('YYYY-MM-DD'),
        createTime[1].format('YYYY-MM-DD'),
      ]
    }
    return fields
  }

  const handleSubmit = () => {
    const fields = getFieldsValue()
    // fields = handleFields(fields)
    console.log(fields)
  }
  const handleChange = (e, key, values) => {
    let fields = getFieldsValue()
    fields[key] = values
    fields = handleFields(fields)
    console.log(fields)
  }
  const getLocation = () => {
    navigator.geolocation.watchPosition(
      position => {
        console.log(position)
      },
      err => console.log(err),
    )
  }
  getLocation()
  return (
    <Row gutter={24}>
      <Col {...ColProps} xl={{ span: 24 }} md={{ span: 8 }}>
        {getFieldDecorator('name')(
          <Input.Search
            placeholder="Search name"
            size="large"
            onSearch={handleSubmit}
          />,
        )}
      </Col>
      <Col {...ColProps} xl={{ span: 24 }} md={{ span: 8 }}>
        当前的地址：{getLocation()}
      </Col>
      <Col {...ColProps} sm={{ span: 12 }} xl={{ span: 24 }} md={{ span: 8 }}>
        {getFieldDecorator('address')(
          <Cascader
            size="large"
            style={{ width: '100%' }}
            onChange={handleChange.bind(null, 'address')}
            options={options}
            placeholader="Please piack an address"
          />,
        )}
      </Col>
      <Col {...ColProps} xl={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }}>
        {getFieldDecorator('createtime')(
          <RangePicker
            size="large"
            onChange={handleChange.bind(null, 'createtime')}
          />,
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
            flexWrap: 'wrap',
          }}
        >
          <div>
            <Button type="primary" size="large">
              Search
            </Button>
            <Button size="large">Reset</Button>
          </div>
          <div>
            <Button type="ghost" size="large">
              Create
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Form.create()(Filter)
