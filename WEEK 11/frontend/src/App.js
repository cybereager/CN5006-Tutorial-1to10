import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BookForm from "./components/AddBook";
import BookUpdateForm from "./components/BookUpdate";
import FncDisplayBooks from "./components/DsplyBk_fncCompt";
import DeleteBook from "./components/Delete_Book";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <center>
            <h2>Online Book Library using React</h2>
          </center>
          <br />
          <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="navbar-nav">
              <Link to="/" className="nav-link">
                <h4>Add a Book</h4>
              </Link>
              <Link to="/DisplayBooksF1" className="nav-link">
                <h4>Display All Books</h4>
              </Link>
              <Link to="/edit/:id" className="nav-link">
                <h4>Edit a Book</h4>
              </Link>
              <Link to="/Delete/:id" className="nav-link">
                <h4>Delete a Book</h4>
              </Link>
            </div>
          </nav>
          <br />
          <Routes>
            <Route path="/" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookUpdateForm />} />
            <Route path="/Delete/:id" element={<DeleteBook />} />
            <Route path="/DisplayBooksF1" element={<FncDisplayBooks />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
