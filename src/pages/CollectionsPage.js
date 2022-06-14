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

  //FILTERS
  const filterCigPacks = () => {
    //Return all cigarette packs
    if (serie === "" && topic === "") {
      getAllCigarettePacks();
    }

    //Filter by Series
    if (serie !== "" && topic === "") {
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
        .catch((error) => console.log(error));
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
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    filterCigPacks();
  }, [serie, topic]);

  return (
    <div>
      <div className="Filter-Container">
        {/* FILTERED BY SERIE */}
        <div className="Filter">
          <h3>SELECT A SERIES</h3>
          <SeriesFilter handleChange={(e) => setSerie(e.target.value)} />
        </div>

        {/* FILTERED BY TOPIC */}
        <div className="Filter">
          <h3>SELECT A TOPIC</h3>
          <TopicFilter handleChange={(e) => setTopic(e.target.value)} />
        </div>

        {/* SHOW ALL */}
        <button onClick={getAllCigarettePacks} className="Show-All">
          SHOW ALL COLLECTION
        </button>
      </div>

      <div className="CigPack-Container">
        {/* IF THE USER IS ADMIN, SHOW ADD OPTION */}
        {role === "ADMIN_ROLE" && (
          <Link to="/collections/addCigPack">
            <button className="Btn-Add-CigPack">
              ADD A NEW CIGARETTE PACK
            </button>
          </Link>
        )}

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
