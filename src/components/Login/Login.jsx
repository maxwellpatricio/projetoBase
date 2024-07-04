import { Button, Form, Input, Card } from 'antd';
import './Login.css';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Login = () => (
    <>
        <Card
            className='CardMain'
        >
            <Form
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe o nome do usuário',
                        },
                    ]}
                >
                    <Input placeholder='Usuário' />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor, informe a senha!',
                        },
                    ]}
                >
                    <Input.Password placeholder='Senha' />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Entrar
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </>
);
export default Login;