import React from "react";
import { Link } from "react-router-dom";

export default function CigarettePackCard(props) {
  return (
    <div className="CigarettePackCard col-xs-12 col-md-6 col-lg-4">
      <div className="CigPackImageContainer">
        <Link
          className="CigPackDetailsLink"
          to={`/collections/${props.cigarettePack.id}`}
        >
          <img
            className="CigPackImage"
            src={`data:image/png;base64,${props.cigarettePack.link}`}
          />
        </Link>
      </div>
      <div className="Data">
        <h2 className="Title">{props.cigarettePack.title}</h2>
        <p>
          <strong>SERIES</strong>
        </p>
        <p>{props.cigarettePack.serieName}</p>
      </div>
    </div>
  );
}
