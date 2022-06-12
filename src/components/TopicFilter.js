import React, { useEffect, useState } from "react";
import axios from "axios";

const apiURL = "http://localhost:5005/api/topics";

export default function TopicFilter({ handleChange }) {
  const [topics, setTopics] = useState([]);

  const getAllTopics = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(apiURL, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((resonse) => setTopics(resonse.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllTopics();
  }, []);

  return (
    <select 
      className="form-control" 
      onChange={handleChange}
    >
      {topics.map((t) => (
        <option key={t.id} value={t.name}>
          {t.name}
        </option>
      ))}
    </select>
  );
}
