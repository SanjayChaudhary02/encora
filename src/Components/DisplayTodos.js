import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteTodo, updateTodo , selectTodo } from "../features/todoSlice";
import { selectUser } from "../features/userSlice";
import Todo from "./Todo";
import Logout from './Logout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Todo.css";

const DisplayTodos = () => {
    const todos = useSelector(selectTodo);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const header = {backgroundColor: '#f3f0ed', borderBottom: '1px solid #ccc'};
    const list = {borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc'}; /* ,height: '100vh' */
    const removeTodo = (id) => {
        dispatch(deleteTodo({
            id: id
        }))
    };
    const updateTodoFun = (id,obj) => {
        dispatch(updateTodo({
            id: id,
            todo: obj
        }))
    };
  return (
    <Container fluid>
    <Row style={header}>
      <Col lg={11} md={10} xs={9}><h5>{`${user && user.username?user.username:'G'} Notes`}</h5></Col>
      <Col lg={1} md={2} xs={3}><Logout /></Col>
    </Row>
    <Row>
      <Col md={4} xs={12} style={list} className="mb-2">
      <ListGroup>
          {todos.length > 0 ? todos.map((item) => {
                return (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={removeTodo}
                      updateTodo={updateTodoFun}
                    />
                );
              })
            : <p>Please Add Todo</p>}
      </ListGroup>
      </Col>
      <Col md={8} xs={12}>
        <Todo />
      </Col>
    </Row>
  </Container>
    
  );
};

export default DisplayTodos;