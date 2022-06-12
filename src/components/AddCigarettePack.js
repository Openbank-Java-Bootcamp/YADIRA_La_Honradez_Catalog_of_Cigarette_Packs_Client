import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const apiURL = "http://localhost:5005";

export default function AddCigarettePack() {
  //SERIES
  const [series, setSeries] = useState([]);

  //TOPICS
  const [topicsList, setTopicsList] = useState([]);
  const [checkedTopics, setCheckedTopics] = useState([]);

  //CIGARETTE PACK DATA
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [serieName, setSerieName] = useState("");
  const [topics, setTopics] = useState([]);

  //GET ALL SERIES
  const getAllSeries = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/series`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setSeries(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllSeries();
  }, []);

  //GET ALL TOPICS
  const getAllTopics = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/topics`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setTopicsList(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllTopics();
  }, [series]);

  //CHECKED TOPICS INITIALIZED ALL IN FALSE
  useEffect(() => {
    setCheckedTopics(new Array(topics.length).fill(false));
  }, [topics]);

  //HANDLE TITLE
  const handleTitle = (e) => setTitle(e.target.value);

  //HANDLE DESCRIPTION
  const handleDescription = (e) => setDescription(e.target.value);

  //HANDLE LINK
  const handleLink = (e) => setLink(e.target.value);

  //HANDLE SERIE
  const handleSerieName = (e) => setSerieName(e.target.value);

  //HANDLE TOPICS
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
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
  }

  //HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, link, serieName, topics };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${apiURL}/api/cigarette_packs`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setDescription("");
        setLink("");
        //Inicializar select y checkbox
      })
      .catch((error) => console.log(error));
  };

  return (
    <div claseName="Add-Cigarette-Pack">
      <h1>ADD A NEW CIGARETTE PACK</h1>

      <form className="Signup-Form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={title}
            onChange={handleTitle}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={description}
            onChange={handleDescription}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image link:</label>
          <input
            type="text"
            name="link"
            className="form-control"
            value={link}
            onChange={handleLink}
          />
        </div>

        <div>
          <label className="form-label">Serie:</label>
          <div className="Serie-Filter">
            <SeriesFilter handleChange={(e) => setSerieName(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="form-label">Topics:</label>
          <ul className="Topic-List">
            {topics.map((t, index) => {
              return (
                <li key={index}>
                  <div className="Topic-List-Item"></div>
                  <input
                    type="checkbox"
                    value={t.id}
                    onChange={handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{t.name}</label>
                </li>
              );
            })}
          </ul>
        </div>

        <button type="submit">Add Cigarette Pack</button>
      </form>
    </div>
  );
}
