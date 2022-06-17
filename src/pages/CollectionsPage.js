import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import CigarettePackCard from "../components/CigarettePackCard";
import SeriesFilter from "../components/SeriesFilter";
import TopicFilter from "../components/TopicFilter";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

const apiURL = "http://localhost:5005/api/cigarette_packs";

export default function CollectionsPage() {
  const { role } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
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
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getAllCigarettePacks();
  }, []);

  //FILTERS
  const filterCigPacks = () => {
    setLoading(true);
    setCigarettePacks([]);
    //Return all cigarette packs
    if (serie === "" && topic === "") {
      getAllCigarettePacks();
    }

    //Filter by Series
    if (serie !== "" && topic === "") {
      const storedToken = localStorage.getItem("authToken");
      axios
        .get(`${apiURL}?serieName=${serie}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setCigarettePacks(response.data);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }

    //Filter by Topic
    if (serie === "" && topic !== "") {
      const storedToken = localStorage.getItem("authToken");
      axios
        .get(`${apiURL}?topic=${topic}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((reponse) => {
          setCigarettePacks(reponse.data);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }

    //Filter by Serie and Topic
    if (serie !== "" && topic !== "") {
      const storedToken = localStorage.getItem("authToken");
      axios
        .get(`${apiURL}?topic=${topic}&serieName=${serie}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((reponse) => {
          setCigarettePacks(reponse.data);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    filterCigPacks();
  }, [serie, topic]);

  return (
    <div>
      <div className="FilterContainer">
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

        {/* IF THE USER IS ADMIN, SHOW ADD OPTION */}
        {role === "ADMIN_ROLE" && (
          <button className="BtnAddCigPack">
            <Link to="/collections/addCigPack">ADD A CIGARETTE PACK</Link>
          </button>
        )}
      </div>

      <div className="CigPackContainer">
        {loading && (
          <iframe
            src="https://giphy.com/embed/xTkcEQACH24SMPxIQg"
            className="Loading"
          ></iframe>
        )}

        <div className="row">
          {cigarettePacks.map((cigarettePack) => (
            <CigarettePackCard
              key={cigarettePack.id}
              cigarettePack={cigarettePack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
