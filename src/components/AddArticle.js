import React, { useState } from "react";
import axios from "axios";

const apiURL = "http://localhost:5005/api/articles";

export default function AddArticle(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, author, description, link };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(apiURL, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setAuthor("");
        setDescription("");
        setLink("");
        props.refreshArticles();
        props.toggleAddForm();
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        if (errorDescription) setErrorMessage(errorDescription);
        const errorDes = error.response.data.errors[0].defaultMessage;
        if(errorDes) setErrorMessage(errorDes);
      });
  };

  return (
    <div className="Add-Container">
      <div className="Add">
        <h1>ADD A NEW ARTICLE</h1>

        <form className="Add-Form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title:</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Author:</label>
            <input
              type="text"
              name="author"
              className="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              name="description"
              className="form-control Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">URL:</label>
            <input
              type="text"
              name="link"
              className="form-control"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div>
            <button type="submit" className="Btn-Submit">
              Add Article
            </button>
            <button
              onClick={props.toggleAddForm}
              type="submit"
              className="Btn-Submit"
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
