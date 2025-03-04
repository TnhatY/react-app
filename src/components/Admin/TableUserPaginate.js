import { useEffect, useState } from "react"
import { getAllUser } from "../../services/apiService";
import { toast } from "sonner";
import ModalUpdateUser from "./ModalUpdateUser";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
    const { listUser, handleClickBtnUpdate, handleClickBtnView, handleClickBtnDelete } = props;

    const handlePageClick = (event) => {
        // props.fetchListUserWithPaginate(+event.selected + 1);
        props.fetchListUserWithPaginate(+event.selected + 1)
        props.setCurrentPage(+event.selected + 1)
        console.log(event.selected)
    };


    return (
        <>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 && listUser.map((item, index) => {
                        return (
                            <tr key={`table-users-${index}`}>
                                <th scope="row">{item.id}</th>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>{item.role}</td>
                                <td>
                                    <button className="btn btn-info" onClick={() => handleClickBtnView(item)}>View</button>
                                    <button className="btn btn-warning mx-3" onClick={() => handleClickBtnUpdate(item)}>Update</button>

                                    <button className="btn btn-danger" onClick={() => handleClickBtnDelete(item)}>Delete</button>

                                </td>
                            </tr>

                        )
                    })

                    }

                </tbody>
            </table>
            <ReactPaginate
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={props.pageCount}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={props.currentPage ? props.currentPage - 1 : 0}
            />
        </>
    )
}

export default TableUserPaginate