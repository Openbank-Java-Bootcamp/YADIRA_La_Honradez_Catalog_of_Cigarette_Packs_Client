import React from "react";

export default function CigarettePackCard(props) {
  return (
    <div className="Cigarette-Pack-Card">
      <div className="CigPack-Image-Container">
        <img className="CigPack-Image" src={props.cigarettePack.link} />
      </div>
      <div className="Data">
        <h2 className="Title">{props.cigarettePack.title}</h2>
        <p>
          <strong>SERIES: </strong>
          {props.cigarettePack.serieName}
        </p>
      </div>
    </div>
  );
}
