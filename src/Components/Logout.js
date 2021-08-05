import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout,selectUser } from '../features/userSlice';
import Button from 'react-bootstrap/Button';
const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <div>
            <Button onClick={(e)=>handleLogout(e)}>Logout</Button>
        </div>
    )
};

export default Logout;