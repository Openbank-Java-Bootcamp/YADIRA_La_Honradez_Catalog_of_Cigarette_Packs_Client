import React, { useEffect, useState } from "react";
import axios from "axios";
import CigarettePackCard from "../components/CigarettePackCard";
import SeriesFilter from "../components/SeriesFilter";
import TopicFilter from "../components/TopicFilter";

const apiURL = "http://localhost:5005/api/cigarette_packs";

export default function CollectionsPage() {
  const [cigarettePacks, setCigarettePacks] = useState([]);
  const [serie, setSerie] = useState("");
  const [topic, setTopic] = useState("");

  //ALL CIGARETTE PACKS 
  const getAllCigarettePacks = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(apiURL, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setCigarettePacks(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCigarettePacks();
  }, []);

  //FILTER BY SERIE TITLE
  const filterBySerie = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${apiURL}?serieName=${serie}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setCigarettePacks(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    filterBySerie();
  }, [serie]);

  //FILTER BY TOPIC
  const filterByTopic = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${apiURL}?topic=${topic}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((reponse) => {
        setCigarettePacks(reponse.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    filterByTopic();
  }, [topic]);

  return (
    <div>
      <div className="Filter-Container">
        {/* FILTERED BY SERIE */}
        <div className="Filter">
          <h3>FILTER BY SERIES</h3>
          <SeriesFilter handleChange={(e) => setSerie(e.target.value)} />
        </div>

        {/* FILTERED BY TOPIC */}
        <div className="Filter">
          <h3>FILTER BY TOPIC</h3>
          <TopicFilter handleChange={(e) => setTopic(e.target.value)} />
        </div>

        {/* SHOW ALL */}
        <button onClick={getAllCigarettePacks} className="Show-All">
          SHOW ALL COLLECTION
        </button>
      </div>

      <div className="CigPack-Container">
        {cigarettePacks.map((cigarettePack) => (
          <CigarettePackCard
            key={cigarettePack.id}
            cigarettePack={cigarettePack}
          />
        ))}
      </div>
    </div>
  );
}
