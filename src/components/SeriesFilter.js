import React, { useEffect, useState } from "react";
import axios from "axios";

const apiURL = "http://localhost:5005/api/series";

export default function SeriesFilter({ handleChange }) {
  const [series, setSeries] = useState([]);

  const getAllSeries = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(apiURL, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setSeries(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllSeries();
  }, []);

  return (
    <select
      className="form-control"
      onChange={handleChange}
    >
      {series.map((s) => (
        <option key={s.id} value={s.titleS}>
          {s.titleS}
        </option>
      ))}
    </select>
  );
}
