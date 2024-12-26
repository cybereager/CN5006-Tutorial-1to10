import React, { useState } from "react";
import axios from "axios";

export default function Book_Form() {
  const url = "http://localhost:5500/";
  const [state, setState] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  // Handle input changes
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  // Handle form submission
  const OnSubmit = (e) => {
    e.preventDefault();
    const bookdata = {
      booktitle: state.booktitle,
      PubYear: state.PubYear,
      author: state.author,
      Topic: state.Topic,
      formate: state.formate,
    };
    axios
      .post(url + "addbooks", bookdata)
      .then((res) => console.log(res.data))
      .catch((err) => console.error("Error while adding the book:", err));
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add Book</h3>
      <form onSubmit={OnSubmit} method="POST">
        {/* Book Title */}
        <div className="form-group">
          <label>Book Title: </label>
          <input
            className="form-control"
            type="text"
            name="booktitle"
            value={state.booktitle}
            onChange={handleChange}
            required
          />
        </div>

        {/* Author */}
        <div className="form-group">
          <label>Book Author: </label>
          <input
            className="form-control"
            name="author"
            value={state.author}
            onChange={handleChange}
            required
          />
        </div>

        {/* Book Topic */}
        <div className="form-group">
          <label>Pick Book Topic: </label>
          <select
            className="form-control"
            name="Topic"
            value={state.Topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Topic
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Programming">Programming</option>
            <option value="Data Science">Data Science</option>
            <option value="AI">AI</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>

        {/* Book Format */}
        <div className="form-group">
          <label>Format: </label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="formate"
              value="Hard Copy"
              checked={state.formate === "Hard Copy"}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">Hard Copy</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="formate"
              value="Electronic Copy"
              checked={state.formate === "Electronic Copy"}
              onChange={handleChange}
              required
            />
            <label className="form-check-label">Electronic Copy</label>
          </div>
        </div>

        {/* Publication Year */}
        <div className="form-group">
          <label>
            Publication Year (between 1980 and 2025):
            <input
              type="range"
              className="form-control-range"
              name="PubYear"
              min="1980"
              max="2025"
              value={state.PubYear}
              onChange={handleChange}
            />
          </label>
          <div>Selected Year: {state.PubYear}</div>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <center>
            <input
              type="submit"
              value="Add this book"
              className="btn btn-primary"
            />
          </center>
        </div>
      </form>
    </div>
  );
}