import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SeriesFilter from "../components/SeriesFilter";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const apiURL = "http://localhost:5005/api";

export default function AddCigPack(props) {
  const { role } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [serieName, setSerieName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  //TOPICS
  const [allTopics, setAllTopics] = useState([]);
  const [topics, setTopics] = useState([]);

  //NAVIGATE
  const navigate = useNavigate();

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

  //HANDLE ADD CIGARETTE PACK
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, link, serieName, topics };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${apiURL}/cigarette_packs`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setDescription("");
        setLink("");
        setSerieName("");
        setTopics([]);
        navigate("/collections");
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      {role === "ADMIN_ROLE" && 
        <div className="AddCigPackContainer">
          <div className="AddCigPack">
            <h1>ADD A CIGARETTE PACK</h1>

            <form
              className="AddForm"
              onSubmit={handleSubmit}
            >
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
                <label className="form-label">Series:</label>
                <SeriesFilter
                  handleChange={(e) => setSerieName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Topics:</label>
                <ul>
                  {allTopics.map((t, i) => {
                    return (
                      <li className="ListItem" key={i}>
                        <input
                          type="checkbox"
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
                  Add Cigarette Pack
                </button>

                <Link to="/collections">
                  <button className="BtnSubmit">Discard</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  );
}
