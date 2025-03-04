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

export const putUpdateUser = async (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('userImage', image);
    data.append('role', role);
    let res = await axios.put('api/v1/participant', data)
    return res;
}


export const getAllUser = async () => {
    let res = await axios.get('api/v1/participant/all')
    return res;
}


export const deleteUser = async (id) => {
    let res = await axios.delete('api/v1/participant', { data: { id: id } })
    return res;
}

export const getUserWithPaginate = async (page, limituser) => {
    let res = await axios.get(`api/v1/participant?page=${page}&limit=${limituser}`)
    return res;
}