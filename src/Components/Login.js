import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync, selectError } from "../features/userSlice";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const hasError = useSelector(selectError);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync({
            username: username,
            password: password,
            loggedIn: true
        }))
    }
    return (
        <div className="center">
            <Form onSubmit={(e) => handleSubmit(e)} className="formWrap">
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">Login</Button>
                {hasError && <ErrorComponent msg={hasError.msg?hasError.msg:""}></ErrorComponent>}
            </Form>
        </div>
    );
};

function ErrorComponent(msg) {
    return <p className="errorMsg">Error: Please enter valid credential</p>
}

export default Login;