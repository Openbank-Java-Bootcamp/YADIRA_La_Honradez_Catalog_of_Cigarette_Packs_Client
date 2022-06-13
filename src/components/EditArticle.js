import React, { useState } from "react";
import axios from "axios";

const apiURL = "http://localhost:5005/api/articles";

export default function EditArticle(props) {
  const [title, setTitle] = useState(props.article.title);
  const [author, setAuthor] = useState(props.article.author);
  const [description, setDescription] = useState(props.article.description);
  const [link, setLink] = useState(props.article.link);
  const [id, setId] = useState(props.article.id);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, author, description, link, id };
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${apiURL}/${id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        props.refreshArticles();
        props.toggleEditForm();
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="Add-Container">
      <div className="Add">
        <h1>EDIT</h1>

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
              Save Changes
            </button>
            <button
              onClick={props.toggleEditForm}
              type="submit"
              className="Btn-Submit"
            >
              Discard Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
