import React from 'react';
import { Drawer, Divider } from 'antd';
import {
    MobileOutlined,
    MailOutlined,
    UserOutlined,
    CompassOutlined,
    BankOutlined,
    DollarOutlined,
} from '@ant-design/icons';

function UserView({ data, visible, close }) {
    return (
        <Drawer width={300} placement="right" onClose={close} closable={false} visible={visible}>
            <div className="text-center mt-3">
                <UserOutlined />
                <h3 className="mt-2 mb-0">{data?.name}</h3>
                <span className="text-muted">{data?.address.city}</span>
            </div>
            <Divider dashed />
            <div className="">
                <h6 className="text-muted text-uppercase mb-3">Company details</h6>
                <p>
                    <BankOutlined />
                    <span className="ml-3 text-dark">Company: {data?.company.name}</span>
                </p>
                <p>
                    <DollarOutlined />
                    <span className="ml-3 text-dark">Business: {data?.company.bs}</span>
                </p>
            </div>
            <div className="mt-5">
                <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
                <p>
                    <MobileOutlined />
                    <span className="ml-3 text-dark">{data?.phone}</span>
                </p>
                <p>
                    <MailOutlined />
                    <span className="ml-3 text-dark">{data?.email ? data?.email : '-'}</span>
                </p>
                <p>
                    <CompassOutlined />
                    <span className="ml-3 text-dark">{data?.address.city}</span>
                </p>
            </div>
        </Drawer>
    );
}

export default UserView;
