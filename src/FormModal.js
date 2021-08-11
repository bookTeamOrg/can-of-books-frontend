import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




 class FormModal extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handelDisplayModal}>
          <Modal.Header>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => this.props.handelSubmitForm(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Title</Form.Label>
                <Form.Control name="title" type="text" placeholder="Enter the Title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Description</Form.Label>
                <Form.Control name="description" type="text" placeholder="Enter the Description" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Status</Form.Label>
                <Form.Control name="status" type="text" placeholder="Enter the Status" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handelDisplayModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

            </>
        )
    }
}

export default FormModal;
