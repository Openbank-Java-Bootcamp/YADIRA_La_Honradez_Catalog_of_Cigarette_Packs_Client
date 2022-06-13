import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import HomePage from "./HomePage";

const apiURL = "http://localhost:5005/api/cigarette_packs";

export default function CigPackDetailsPage() {
  const { role } = useContext(AuthContext);
  const [cigarettePack, setCigarettePack] = useState(null);
  const { cigPackId } = useParams();
  const [link, setLink] = useState(null);
  const [topics, setTopics] = useState([]);

  const getCigarettePack = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${apiURL}/${cigPackId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const selectCigPack = response.data;
        setCigarettePack(selectCigPack);
        setLink(selectCigPack.link);
        setTopics(selectCigPack.topics);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCigarettePack();
  }, []);

  console.log(topics);

  return (
    <div>
      <div>
        {cigarettePack ? (
          <div className="CigPack-Details-Container">
            <div className="CigPack-Details-Image">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    isFluidWidth: true,
                    src: link,
                  },
                  largeImage: {
                    src: link,
                    width: 1200,
                    height: 867,
                  },
                }}
              />
            </div>
            <div className="CigPack-Details-Data">
              <h2 className="Title-Details">{cigarettePack.title}</h2>
              <div className="Description-Details">
                <p>{cigarettePack.description}</p>
              </div>
              <div className="Description-Details">
                <p>
                  <strong>Series: </strong>
                  {cigarettePack.serieName}
                </p>
              </div>
              <p>
                <strong>Topics: </strong>
              </p>
              <div>
                {topics.map((t) => (
                  <p className="Topic-Item">{t}</p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <HomePage />
          </>
        )}
      </div>
    </div>
  );
}
