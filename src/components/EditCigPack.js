import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SeriesFilter from "./SeriesFilter";
import { AuthContext } from "../context/auth.context";

const apiURL = "http://localhost:5005/api";

export default function EditCigPack(props) {
  const { role } = useContext(AuthContext);

  const [title, setTitle] = useState(props.cigPack.title);
  const [description, setDescription] = useState(props.cigPack.description);
  const [link, setLink] = useState(props.cigPack.link);
  const [serieName, setSerieName] = useState(props.cigPack.serieName);
  const [topics, setTopics] = useState(props.cigPack.topics);
  const [errorMessage, setErrorMessage] = useState(undefined);

  //TOPICS
  const [allTopics, setAllTopics] = useState([]);

  //ALL TOPICS
  const getAllTopics = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${apiURL}/topics`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setAllTopics(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllTopics();
  }, []);

  //HANDLE IMAGE FILE
  const onFormChange = (e) => {
    let file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  };

  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    console.log(binaryString);
    setLink(btoa(binaryString));
  };

  //HANDLE TOPICS
  const handleCheckedTopic = (name) => {
    let elems = topics;
    const elemIndex = elems.findIndex((e) => e === name);

    if (elemIndex >= 0) {
      elems = elems.filter((e) => e !== name);
    } else {
      elems.push(name);
    }

    setTopics(elems);
  };

  const check = (name) => {
    let checked = "";
    const elemIndex = topics.findIndex((e) => e === name);
    if (elemIndex >= 0) {
      checked = "checked";
    } else {
      checked = "";
    }
    console.log(checked);
    return checked;
  };

  //HANDLE EDIT CIGARETTE PACK
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, link, serieName, topics };
    const storedToken = localStorage.getItem("authToken");
    console.log(requestBody);

    axios
      .put(`${apiURL}/cigarette_packs/${props.cigPack.id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setDescription("");
        setLink("");
        setSerieName("");
        setTopics([]);
        props.refreshCigPacks();
        props.toggleEditForm();
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="EditCigPackContainer">
      <div className="EditCigPack">
        <h1>EDIT</h1>
        <form className="AddForm" onSubmit={handleSubmit}>
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
            <label className="form-label">Description:</label>
            <textarea
              name="description"
              className="form-control Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image:</label>
            <input
              type="file"
              className="form-control"
              name="image"
              id="file"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => onFormChange(e)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Series: {serieName}</label>
            <SeriesFilter handleChange={(e) => setSerieName(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Topics:</label>
            <ul>
              {allTopics.map((t, i) => {
                return (
                  <li className="ListItem" key={i}>
                    <input
                      type="checkbox"
                      checked={check(t.name)}
                      onChange={() => handleCheckedTopic(t.name)}
                    />
                    <span>&nbsp;&nbsp;{t.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div>
            <button type="submit" className="BtnSubmit">
              Save Changes
            </button>

            <button
              onClick={props.toggleEditForm}
              type="submit"
              className="BtnSubmit"
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
