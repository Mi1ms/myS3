import { Link } from 'react-router-dom';
import { Input, Button, Row, Col, Form } from 'antd';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { successMsg, errorMsg } from '../../utils/message';
import { getApiUrl } from '../../utils/index';


export default function SignUp() {
    const [form] = Form.useForm();
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    
    const onSubmit = (fields) => {
       let { email, nickname, password, confirmPassword } = fields;
      
        if (password !== confirmPassword ) {
            errorMsg();
            return;
        }

        fetch(`${getApiUrl()}/login`, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ email, nickname, password }) 
            }
        ).then(response => {
            response.json()
            console.log(response);
        }).catch(err => console.log(err));
  
    }

    return( 
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={4}></Col>
            <Col span={12}>
                <Form
                    {...layout}
                    form={form}
                    name="signup"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onSubmit}
                >
                            
                    <Form.Item
                        label="email de recuperation"
                        name="email"
                        rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Email requis!',
                        },
                        ]}
                    >
                        <Input
                        suffix={ <UserOutlined/>} />
                    </Form.Item>

                    <Form.Item
                        label="nickname"
                        name="nickname"
                        rules={[
                        {
                            required: true,
                            message: 'Nickname requis !',
                        },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Mot de passe requis !',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        label="Confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Champs requis',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Ne correspond pas aux mot de passe!');
                            },
                        }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Button type="link" block>
                        <Link to='login'>Déjà un compte ?</Link>
                    </Button>

                    <Button
                    type="primary"
                    icon={ < PoweroffOutlined />}
                    htmlType='submit'
                    // loading={loadings[2]}
                    />
                </Form>

            </Col>
            <Col span={4}></Col>
        </Row> 
    ); 
}