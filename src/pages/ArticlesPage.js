import React, { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import AddArticle from "../components/AddArticle";

const apiURL = "http://localhost:5005/api/articles";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  //SHOW ADD OPTIONS STATE
  const [showAddForm, setShowAddForm] = useState(false);

  //SHOW ADD FORM
  const toggleAddForm = () => setShowAddForm(true);
  console.log(showAddForm);

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
      {!showAddForm ? (
        <button onClik={toggleAddForm} className="Add-Button">
          ADD A NEW ARTICLE
        </button>
      ) : (
        <AddArticle />
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
