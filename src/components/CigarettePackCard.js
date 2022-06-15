import React from "react";
import { Link } from "react-router-dom";

export default function CigarettePackCard(props) {
  return (
    <div className="CigarettePackCard col-xs-12 col-md-6 col-lg-4">
      <div className="CigPackImageContainer">
        <img
          className="CigPackImage"
          src={`data:image/png;base64,${props.cigarettePack.link}`}
        />
      </div>
      <div className="Data">
        <h2 className="Title">
          <Link
            className="CigPackDetailsLink"
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
