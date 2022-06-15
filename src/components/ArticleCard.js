import axios from "axios";
import { useContext, useState } from "react";
import EditArticle from "./EditArticle";
import { AuthContext } from "../context/auth.context";
import Swal from "sweetalert2";

const apiURL = "http://localhost:5005/api/articles";

export default function ArticleCard(props) {
  const { role } = useContext(AuthContext);

  //SHOW EDIT OPTION STATE
  const [showEditForm, setShowEditForm] = useState(false);
  const toggleEditForm = () => setShowEditForm(!showEditForm);

  //DELETE FUNCTION
  const deleteArticle = () => {
    Swal.fire({
      icon: "question",
      background: '#252526',
      text: "Are you sure to delete?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const storedToken = localStorage.getItem("authToken");
        axios
          .delete(`${apiURL}/${props.article.id}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
          })
          .then((result) => {
            props.handleArticles();
            Swal.fire("Removed!", "", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div className="ArticleCard">
      <a href={props.article.link} target="_blank">
        <h2>{props.article.title}</h2>
      </a>
      <h6>{props.article.author.toUpperCase()}</h6>
      <p>{props.article.description}</p>

      {/* IF THE USER IS ADMIN, SHOW ADD OPTIONS */}
      {role === "ADMIN_ROLE" && (
        <div className="ModifyArticle">
          <button onClick={toggleEditForm}>EDIT</button>
          <button onClick={deleteArticle}>DELETE</button>
        </div>
      )}

      {showEditForm && (
        <EditArticle
          article={props.article}
          refreshArticles={props.handleArticles}
          toggleEditForm={toggleEditForm}
        />
      )}
    </div>
  );
}
