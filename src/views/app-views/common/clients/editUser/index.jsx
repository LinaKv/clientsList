import React from 'react';
import UsersList from 'services/UsersList';
import { useEffect, useState } from 'react';
import Loading from 'components/shared-components/Loading';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { Form, Button, Input, Row, Col, message } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';

function EditUser() {
    const [userInfo, setUserInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userId } = useParams();

    const history = useHistory();

    useEffect(() => {
        UsersList.getUser(userId)
            .then(
                (data) => {
                    setUserInfo(data);
                },
                (error) => {
                    console.error(error);
                },
            )
            .finally(() => {
                setLoading(false);
            });
    }, [userId]);

    const onFinish = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            message.success({ content: `Update user`, duration: 2 });
            history.push('/app/common/clients/clientsList');
        }, 3000);
    };

    if (loading) return <Loading />;

    return (
        <>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={{
                        name: userInfo.name,
                        email: userInfo.email,
                        username: userInfo.username,
                        phoneNumber: userInfo.phone,
                        website: userInfo.website,
                        address: userInfo.address.street + ' ' + userInfo.address.suite,
                        city: userInfo.address.city,
                    }}
                    onFinish={onFinish}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                type: 'email',
                                                message: 'Please enter a valid email!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item label="Phone Number" name="phoneNumber">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item label="Website" name="website">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item label="City" name="city">
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item label="Address" name="address">
                                        <Input />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
}

export default EditUser;
