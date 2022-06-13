import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import AddArticle from "../components/AddArticle";
import { AuthContext } from "../context/auth.context";

const apiURL = "http://localhost:5005/api/articles";

export default function ArticlesPage() {
  const { role } = useContext(AuthContext);
  const [articles, setArticles] = useState([]);

  //SHOW ADD OPTION
  const [showAddForm, setShowAddForm] = useState(false);
  const toggleAddForm = () => setShowAddForm(!showAddForm);

  //GET ALL ARTICLES
  const getAllArticles = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(apiURL, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setArticles(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  return (
    <div className="Article-Container">
      {/* IF THE USER IS ADMIN, SHOW ADD OPTIONS */}
      {role === "ADMIN_ROLE" && (
        <>
          {!showAddForm ? (
            <button onClick={toggleAddForm} className="Add-Button">
              ADD A NEW ARTICLE
            </button>
          ) : (
            <AddArticle
              refreshArticles={getAllArticles}
              toggleAddForm={toggleAddForm}
            />
          )}
        </>
      )}

      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          handleArticles={getAllArticles}
        />
      ))}
    </div>
  );
}
