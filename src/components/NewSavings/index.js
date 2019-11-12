import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function NewSavings(props) {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const [state, setState] = useState({
    earnings : "",
    shiftStart : "",
    shiftEnd : ""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = e => {
    const {name, value} = e.target
    setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if(validated === true){
      handleClose();
    }
    console.log(state);
  };

  return (
    <div>
      <div className="row mb-4">
        <button onClick={handleShow} type="button" className="btn btn-outline-primary mx-auto w-50">+</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Goal</Form.Label>
              <Form.Control type="email" placeholder="New Skis" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Importance</Form.Label>
              <Form.Control as="select">
                <option>1 (I need this as fast as possible)</option>
                <option>2 (I really want this)</option>
                <option>3 (I want this but don't need it right away)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" placeholder="$400" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}