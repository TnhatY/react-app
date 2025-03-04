import { getAllUser, getUserWithPaginate } from "../../services/apiService";
import ModelCreateUser from "./ModalCreateUser";
import { useState, useEffect } from "react";
import ModalUpdateUser from "./ModalUpdateUser";
import TableUser from "./TableUser";
import Dashboard from "./Dashboard";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";




const ManagerUser = (props) => {
    const [listUser, getListUser] = useState([])
    const [showModalCreateUser, setShowModalCreateUser] = useState(false)
    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false)
    const [showModalViewUser, setShowModalViewUser] = useState(false)
    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false)
    const [userUpdate, setUserUpdate] = useState("");
    const [userDelete, setUserDelete] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const LIMIT_USER = 3;

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setUserUpdate(user);
    };

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true)
    }
    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true)
        setUserDelete(user);
    }

    useEffect(() => {
        //fetchListUser();
        fetchListUserWithPaginate(1);
    }, []);

    // const fetchListUser = async () => {
    //     let res = await getAllUser();
    //     if (res.EC === 0) {
    //         getListUser(res.DT)
    //     }

    // }

    const fetchListUserWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page, LIMIT_USER);
        if (res.EC === 0) {
            getListUser(res.DT.users)
            setPageCount(res.DT.totalPages)
            console.log(res.DT)
        }

    }

    const resetUpdateUser = () => {
        setUserUpdate({})
    }




    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={() => setShowModalCreateUser(true)}>Add new user</button>
            </div>
            <div>
                <ModelCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchListUser={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                {/* <TableUser listUser={listUser}
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnView={handleClickBtnView}
                    handleClickBtnDelete={handleClickBtnDelete}
                /> */}
                <TableUserPaginate
                    handleClickBtnUpdate={handleClickBtnUpdate}
                    handleClickBtnView={handleClickBtnView}
                    handleClickBtnDelete={handleClickBtnDelete}
                    pageCount={pageCount}
                    listUser={listUser}
                    fetchListUserWithPaginate={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setShowModalUpdateUser}
                    userUpdate={userUpdate}
                    resetUpdateUser={resetUpdateUser}
                    fetchListUser={fetchListUserWithPaginate}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setShowModalDeleteUser}
                    userDelete={userDelete}
                    fetchListUser={fetchListUserWithPaginate}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
}
export default ManagerUser;