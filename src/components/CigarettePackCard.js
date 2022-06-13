import React from "react";
import { Link } from "react-router-dom";

export default function CigarettePackCard(props) {
  return (
    <div className="Cigarette-Pack-Card">
      <div className="CigPack-Image-Container">
        <img className="CigPack-Image" src={props.cigarettePack.link} />
      </div>
      <div className="Data">
        <h2 className="Title">
          <Link
            className="CigPack-Details-Link"
            to={`/collections/${props.cigarettePack.id}`}
          >
            {props.cigarettePack.title}
          </Link>
        </h2>
        <p>
          <strong>SERIES</strong>
        </p>
        <p>{props.cigarettePack.serieName}</p>
      </div>
    </div>
  );
}
