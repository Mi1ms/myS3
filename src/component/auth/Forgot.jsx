import { Row, Col, Input, Form, Button } from 'antd';
import { layout, getApiUrl } from '../../utils/index'

export default function Forgot() {
    const [form] = Form.useForm();

    const onSubmit = (field) => {
        const { email } = field
        
        // check if exist in database
         
        // Fetch Api
        fetch(`${getApiUrl()}/forgotpassword`, 
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ email }) 
            }
        ).then(response => {
            response.json()
            console.log(response);
        }).catch(err => console.log(err));
    };

    return (
        <>
         Password forgoten
            <Row >
                <Col span={6}></Col>
                <Col span={14}>
                    <Form
                        {...layout}
                        form={form}
                        name='forgotPsw'
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onSubmit}
                    >

                        <Form.Item
                        label="Email "
                        name="email"
                        rules={[
                        {
                            required: true,
                            type: 'email',
                            message: 'Email requis!',
                        },
                        ]}>
                            <Input />
                            <Button htmlType='submit'>
                                Envoyer
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={6}></Col>
            </Row>
        </>
    )
}