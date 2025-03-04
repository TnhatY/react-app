import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'sonner';
import { deleteUser } from '../../services/apiService';

const ModalDeleteUser = (props) => {
    const { show, setShow, userDelete, fetchListUser } = props;

    const handleClose = () => setShow(false);

    const submitDeleteUser = async () => {
        let res = await deleteUser(userDelete.id)
        if (res && res.EC === 0) {
            toast.success("Xoá thành công!")
            handleClose()
            props.setCurrentPage(1);
            await fetchListUser(1);
        } else {
            toast.success(res.EC)
        }

    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xoá User có email: {userDelete.email}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Không
                    </Button>
                    <Button variant="primary" onClick={() => submitDeleteUser()}>
                        Có
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;