import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export class UpdateFormModel extends Component {
    constructor(props){
        super(props);
       this.State={
        title : this.props.bookObject.title,
        description : this.props.bookObject.description,
        status :  this.props.bookObject.status,
        bookId: this.state.bookObject._id
       }
    }

    handleTitleChange =(event) => this.setState({title:event.target.value});
    handleDescriptionChange =(event) => this.setState({description:event.target.value});
    handleStatusChange =(event) => this.setState({status:event.target.value});

    handelSubmitForm = ((e) => {
        e.preventDefault();
        const bookId = this.state.bookId;
        const body = {
          title: this.state.title,
          description: this.state.description,
          status: this.state.status,
        };

        axios.put(`${process.env.REACT_APP_SERVER}/cat/${bookId}`, body).then((axiosResponse) => {
            console.log('updated Book Data:  ', axiosResponse.data);
      
            // once we get the new updated data from axios from the backend, we need to reflect it on the frontend without refreshing
      
            // we will use the map function to loop through the array of cat that we have. find the the cat that got updated by its ID and 
            // update the data for that cat
      
            const updatedBookArr = this.props.booksArray.map(book => {
      
              if (book._id === bookId) {
                book.title = axiosResponse.data.title;
                book.description = axiosResponse.data.description;
                book.status = axiosResponse.data.status;
      
                return book;
              }
              return book;
      
            });
            this.props.updateBooks(updatedBookArr);
      
      
      
            this.props.handelDisplayModal({}); // to  close the modal and reset the object of the cat to be updated
          }).catch(error => alert(error))
        });
    render() {
        return (
            <div>
            <Modal show={this.props.show} onHide={this.props.handelDisplayModal}>
              <Modal.Header>
                <Modal.Title>Update Book</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={(e) => this.handelSubmitForm(e)}>
                  <Form.Group className="mb-3">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control onChange={(e) => this.handelNameChange(e)} value={this.state.title} type="text" placeholder="Enter the book title" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => this.handelBreedChange(e)} value={this.state.description} type="text" placeholder="Enter the description" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Book Status</Form.Label>
                    <Form.Control onChange={(e) => this.handelImageChange(e)} value={this.state.status} type="text" placeholder="Enter the status" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update Book
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handelDisplayModal}>
                  Close Form
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
    }
}

export default UpdateFormModel
