import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import SeriesFilter from "../components/SeriesFilter";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import HomePage from "./HomePage";

const apiURL = "http://localhost:5005/api";

export default function AddCigPack(props) {
  const { role } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [serieName, setSerieName] = useState("");
  const [topics, setTopics] = useState([]);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [allTopics, setAllTopics] = useState([]);
  const [checkedTopics, setCheckedTopics] = useState([]);

  //HANDLE TOPICS
  /*
  const handleChange = (position) => {
    const updatedCheckedState = checkedTopics.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedTopics(updatedCheckedState);
    selectTopics();
  };

  function selectTopics() {
    let filteredTopics = [];
    for (let i = 0; i < checkedTopics.length; i++) {
      if (checkedTopics[i] === true) {
        filteredTopics = [...filteredTopics, topics.splice(i, 1)[0].id];
      }
    }
    setTopics(filteredTopics);
  }*/

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

  const onFormChange = (e) => {
    //console.log("file to upload:", e.target.files[0]);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, link, serieName, topics };
    const storedToken = localStorage.getItem("authToken");
    console.log(requestBody);

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
        //props.refreshCigPacks();
        //props.toggleAddForm();
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        if (errorDescription) setErrorMessage(errorDescription);
        const errorDes = error.response.data.errors[0].defaultMessage;
        if (errorDes) setErrorMessage(errorDes);
      });
  };

  return (
    <>
      {role === "ADMIN_ROLE" ? (
        <div className="Add-CigPack-Container">
          <div className="Add-CigPack">
            <h1>ADD A NEW CIGARETTE PACK</h1>

            <form
              className="Add-Form"
              onSubmit={handleSubmit}
              onChange={(e) => onFormChange(e)}
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
                      <li className="List-Item" key={i}>
                        <input type="checkbox" value={t.name} />
                        <span>{" "}</span><span className="checkmark">{t.name}</span>
                        {/*<label htmlFor={`custom-checkbox-${i}`}>{t.name}</label>*/}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {errorMessage && <p className="error-message">{errorMessage}</p>}

              <div>
                <button type="submit" className="Btn-Submit">
                  Add Article
                </button>

                <Link to="/collections">
                  <button className="Btn-Submit">Back to Collection</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          <HomePage />
        </>
      )}
    </>
  );
}
