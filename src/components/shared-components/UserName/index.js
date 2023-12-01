import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const UserName = ({ name, suffix, subTitle, id }) => {
    return (
        <div className="avatar-status d-flex align-items-center">
            <Link className="ml-2 cursor-pointer" to={`editUser/${id}`}>
                <div>
                    <div className="avatar-status-name">{name}</div>
                    <span>{suffix}</span>
                </div>
                <div className="text-muted avatar-status-subtitle">{subTitle}</div>
            </Link>
        </div>
    );
};

UserName.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    onNameClick: PropTypes.func,
};

export default UserName;
