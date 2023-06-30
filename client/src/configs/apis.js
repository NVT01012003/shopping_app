const server_host = process.env.REACT_APP_SERVER_HOST;
export const auth_api = {
    auth: `${server_host}/api/auth`,
    register: `${server_host}/api/auth/register`,
    login: `${server_host}/api/auth/login`,
    google: `${server_host}/api/auth/google`,
    facebook: `${server_host}/api/auth/facebook`,
};
