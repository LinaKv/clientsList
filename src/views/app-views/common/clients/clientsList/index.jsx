import React, { useEffect, useState } from 'react';
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import UsersList from '../../../../../services/UsersList';
import Loading from 'components/shared-components/Loading';
import { UserName } from 'components/shared-components/UserName';

function UserList() {
    const [usersInfo, setUsersInfo] = useState({
        users: [],
        userProfileVisible: false,
        selectedUser: null,
    });
    const { users, userProfileVisible, selectedUser } = usersInfo;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UsersList.getUsers().then(
            (data) => {
                setUsersInfo((prev) => ({ ...prev, users: data }));
                setLoading(false);
            },
            (error) => {
                setLoading(false);
                console.error(error);
            },
        );
    }, []);

    const deleteUser = (userId) => {
        setUsersInfo((prev) => ({ ...prev, users: users.filter((item) => item.id !== userId) }));
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    };

    const showUserProfile = (userInfo) => {
        setUsersInfo((prev) => ({ ...prev, userProfileVisible: true, selectedUser: userInfo }));
    };

    const closeUserProfile = () => {
        setUsersInfo((prev) => ({ ...prev, userProfileVisible: false, selectedUser: null }));
    };

    const tableColumns = [
        {
            title: 'User',
            dataIndex: 'name',
            render: (_, record) => (
                <div className="d-flex">
                    <UserName id={record.id} name={record.name} subTitle={record.email} />
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'UserName',
            dataIndex: 'username',
            sorter: {
                compare: (a, b) => a.role.length - b.role.length,
            },
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            render: (number) => <span>{number}</span>,
            sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix(),
        },
        {
            title: 'WebSite',
            dataIndex: 'website',
            render: (status) => <Tag className="text-capitalize">{status}</Tag>,
            sorter: {
                compare: (a, b) => a.status.length - b.status.length,
            },
        },
        {
            title: '',
            dataIndex: 'actions',
            render: (_, elm) => (
                <div className="text-right">
                    <Tooltip title="View">
                        <Button
                            type="primary"
                            className="mr-2"
                            icon={<EyeOutlined />}
                            onClick={() => {
                                showUserProfile(elm);
                            }}
                            size="small"
                        />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => {
                                deleteUser(elm.id);
                            }}
                            size="small"
                        />
                    </Tooltip>
                </div>
            ),
        },
    ];

    if (loading) return <Loading />;

    return (
        <Card bodyStyle={{ padding: '0px' }}>
            <Table columns={tableColumns} dataSource={users} rowKey="id" />
            <UserView data={selectedUser} visible={userProfileVisible} close={closeUserProfile} />
        </Card>
    );
}

export default UserList;
