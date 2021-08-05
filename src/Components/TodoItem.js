import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';

const TodoItem = (props) => {
  const { item, removeTodo } = props;
  return (
    <ListGroup.Item>
        <Row>
            <Col xs={10}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
            </Col>
            <Col xs={2}>
              <CloseButton aria-label="Hide" onClick={() => removeTodo(item.id)} />
            </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default TodoItem;