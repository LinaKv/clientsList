import fetch from 'auth/FetchInterceptor';

const UsersList = {};

UsersList.getUsers = function () {
    return fetch({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'get',
    });
};

UsersList.getUser = function (id) {
    return fetch({
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        method: 'get',
    });
};

export default UsersList;
