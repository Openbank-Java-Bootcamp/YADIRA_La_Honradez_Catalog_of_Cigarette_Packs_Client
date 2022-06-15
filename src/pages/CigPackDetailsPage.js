import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import HomePage from "./HomePage";
import EditCigPack from "../components/EditCigPack";
import Swal from "sweetalert2";

const apiURL = "http://localhost:5005/api/cigarette_packs";

export default function CigPackDetailsPage() {
  const { role } = useContext(AuthContext);
  const [cigarettePack, setCigarettePack] = useState(null);
  const [link, setLink] = useState(null);
  const [topics, setTopics] = useState([]);

  const { cigPackId } = useParams();

  //NAVIGATE
  const navigate = useNavigate();

  //SHOW EDIT OPTION STATE
  const [showEditForm, setShowEditForm] = useState(false);
  const toggleEditForm = () => setShowEditForm(!showEditForm);

  //GET ALL CIGARETTE PACKS
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

  //DELETE CIGARETTE PACK
  const deleteCigPack = () => {
    Swal.fire({
      icon: "question",
      background: "#252526",
      text: "Are you sure to delete?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const storedToken = localStorage.getItem("authToken");
        axios
          .delete(`${apiURL}/${cigPackId}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          })
          .then((result) => {
            Swal.fire("Removed!", "", "success");
            navigate("/collections");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div>
      <div>
        {cigarettePack ? (
          <>
            <div className="CigPackDetailsContainer">
              <div className="CigPackDetailsImage">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      isFluidWidth: true,
                      src: `data:image/png;base64,${link}`,
                    },
                    largeImage: {
                      src: `data:image/png;base64,${link}`,
                      width: 1200,
                      height: 867,
                    },
                  }}
                />
              </div>
              <div className="CigPackDetailsData">
                <h2 className="TitleDetails">{cigarettePack.title}</h2>
                <div className="DescriptionDetails">
                  <p>{cigarettePack.description}</p>
                </div>
                <div className="DescriptionDetails">
                  <p>
                    <strong>Series: </strong>
                    {cigarettePack.serieName}
                  </p>
                </div>
                <p>
                  <strong>Topics: </strong>
                </p>
                <div>
                  {topics.map((t, i) => (
                    <p key={i} id="TopicItem">
                      {t}
                    </p>
                  ))}
                </div>
                {role === "ADMIN_ROLE" && (
                  <div className="ButtonsDetails">
                    <button onClick={toggleEditForm} className="BtnSubmit">
                      EDIT
                    </button>
                    <button onClick={deleteCigPack} className="BtnSubmit">
                      DELETE
                    </button>
                    <Link to="/collections">
                      <button className="BtnSubmit">BACK TO COLLECTION</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <HomePage />
          </>
        )}
      </div>

      {showEditForm && (
        <EditCigPack
          cigPack={cigarettePack}
          refreshCigPacks={getCigarettePack}
          toggleEditForm={toggleEditForm}
        />
      )}
    </div>
  );
}
