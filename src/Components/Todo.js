import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Todo.css';

const Todos = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  var [hasError, setHasError] = useState(false);

  const dispatch = useDispatch();
  
  const add = (e) => {
      e.preventDefault();
    try {
        if (title === "") {
            throw new Error("Empty input");
        } else {
            dispatch(addTodo({
                title: title,
                desc: desc
            })
            );
            setTitle("");
            setDesc("");
            setHasError(false);
        }
    } catch{
        setHasError(true);
    }
  };

  return (
    <Form>
        <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </Form.Group>
        {hasError && <ErrorComponent></ErrorComponent>}
        <Form.Group className="mb-3" controlId="body">
            <Form.Label>Body</Form.Label>
            <Form.Control as="textarea" rows={3} value={desc} onChange={(e) => setDesc(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => add(e)}>Save</Button>
  </Form>
  );
};

function ErrorComponent() {
    return <p className="errorMsg">Please enter title</p>
  }

export default Todos;