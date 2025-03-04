import { Button, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Toaster } from "sonner";


const Admin = (props) => {
    return (
        <div>
            <div>Quản lý user</div>
            <div>
                <Toaster position="top-right" richColors />
                <Outlet />

            </div>


        </div>
    )
}
export default Admin;