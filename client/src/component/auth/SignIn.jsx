import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getApiUrl} from '../../utils/index';

    
        
//         // // store.set('loggedIn', true);
//         // history.push('/users');
// }
    
export default function SignIn() {
    const [form] = Form.useForm();
    const layout = {
        labelCol: {
        span: 8,
        },
        wrapperCol: {
        span: 16,
        },
    };

    const onFinish = async (field) => {
        let { email, password } = field

        if (email.length > 0 && password.length > 0 ) {
            // clean fields
            email.trim();
            password.trim();

            fetch(`${getApiUrl()}/login`, 
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ email, password }) 
                }
            ).then(response => {
                response.json()
                console.log(response);
            }).catch(err => console.log(err));

        }
    };

    
    return (
        <> 
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col span={4}></Col>
            <Col span={12}>
                <Form
                    {...layout}
                    form={form}
                    name="login"
                    className='space-margin'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                            
                    <Form.Item
                        label="email"
                        name="email"
                        rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Email requis !',
                        },
                        ]}
                    >
                        <Input
                        suffix={ <UserOutlined/>} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Mot de passe requis!',
                        },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Button type="link" block>
                        <Link to='password-forgot'>Impossible de se souvenir du mot de passe ?</Link>
                    </Button>

                    <Button
                    type="primary"
                    htmlType='submit'
                    icon={ < PoweroffOutlined />}
                    // loading={loadings[2]}
                    block />
                </Form>

            </Col>
            <Col span={4}></Col>
        </Row> 
        </>
    ); 
}