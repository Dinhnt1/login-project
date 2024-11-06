import { Button, Form, Input } from 'antd';

const Register = ({ handleChangeToLogin }) => {
    return (
        <>
        <div className="ant-register">
        <Form
          name="wrap"
          labelCol={{
            flex: '110px',
          }}
          labelAlign="left"
          labelWrap
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please enter your name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please enter a valid email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        <Form.Item label=" ">
            <Button type="primary" htmlType="Registered" className="ant-registered-login">
            Registered
            </Button>
          </Form.Item>
        </Form>
         <div>
          <a className="back" onClick={handleChangeToLogin}>Back to Login</a>
        </div>
        </div>
      </>
    );
};
export default Register;