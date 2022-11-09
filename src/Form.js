import React from 'react'
import { Button, Modal, Form, Input, InputNumber } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the name of the product!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Price">
              {getFieldDecorator('price', {rules: [{ required: true, message: 'Please enter the price of the product!' }],})(<InputNumber/>)}
            </Form.Item>
            <Form.Item label="Description">
            {getFieldDecorator('description', {rules: [{ required: true, message: 'Please enter the price of the product!' }],})(<Input/>)}

            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

export default CollectionCreateForm