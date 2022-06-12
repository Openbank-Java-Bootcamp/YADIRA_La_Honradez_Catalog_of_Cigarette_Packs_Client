import axios from "axios";

const apiURL = "http://localhost:5005/api/articles";

export default function ArticleCard(props) {

  //DELETE FUNCTION
  const deleteArticle = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${apiURL}/${props.article.id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(props.handleArticles)
      .catch((err) => console.log(err));
  };

  return (
    <div className="Article-Card">
      <a href={props.article.link} target="_blank">
        <h2>{props.article.title}</h2>
      </a>
      <h6>{props.article.author.toUpperCase()}</h6>
      <p>{props.article.description}</p>

      {/* IF THE USER IS ADMIN, SHOW MODIFY OPTIONS */}
      <div className="Modify-Article">
        <button>MODIFY ARTICLE</button>
        <button onClick={deleteArticle}>DELETE ARTICLE</button>
      </div>
    </div>
  );
}
