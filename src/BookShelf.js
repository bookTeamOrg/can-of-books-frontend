import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import FormModal from "./FormModal";
import Button from "react-bootstrap/Button";

export class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      displayAddModal: false,
    };
  }

  componentDidMount = () => {
    console.log(this.props.auth0.user.email);
    const userEmail = this.props.auth0.user.email; //or user

    axios
      .get(`${process.env.REACT_APP_SERVER}/books?email=${userEmail}`)
      .then((axiosResponse) => {
        this.setState({
          books: axiosResponse.data,
        });
      })
      .catch((error) => alert(error));
  };

  handelDisplayModal = () => {
    this.setState({ displayModal: !this.state.displayAddModal });
  };

  handelAddBookForm = (e) => {
    e.preventDefault();
    this.handelDisplayModal();

    const body = {
      email: this.props.auth0.user.email, //check if it works
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER}/book`, body)
      .then((axiosResponse) => {
        this.state.books.push(axiosResponse.data);
        this.setState({
          books: this.state.books,
        });
      })
      .catch((error) => alert(error));
  };

  handelDeleteBook = (bookId) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER}/book/${bookId}`)
      .then((res) => {
        if (res.data.ok === 1) {
          const tempBookObj = this.state.books.filter(
            (book) => book._id !== bookId
          );
          this.setState({
            cats: tempBookObj,
          });
        }
      })
      .catch((error) => alert(error));
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      isAuthenticated && (
        <div>
          <Button variant="secondary" onClick={() => this.handelDisplayModal()}>
            Add a Book
          </Button>

          <FormModal
            show={this.state.displayAddModal}
            handelDisplayModal={this.handelDisplayModal}
            handelSubmitForm={this.handelAddBookForm}
          />

          {this.state.books.length && (
            <div>
              {this.state.books.map((book) => {
                return (
                  <Carousel>
                    <Carousel.Item>
                      {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                      /> */}
                      <h3> 
                          {book.title}
                      </h3>
                      <Carousel.Caption>
                        {/* <h3>Your First Book</h3> */}
                        <h5>
                            {book.description}
                        </h5>
                        <h6>
                            {book.status}
                        </h6>
                        {/* <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p> */}
                      </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>Your Second Book</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Your Third Book</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item> */}
                  </Carousel>
                );
              })}
            </div>
          )}
        </div>
      )
    );
  }
}

export default withAuth0(BookShelf);
