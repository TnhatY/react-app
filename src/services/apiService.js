import axios from '../utils/axiosCustomize'
export const postCreateNewUser = async (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('userImage', image);
    data.append('role', role);
    let res = await axios.post('api/v1/participant', data)
    return res;
}