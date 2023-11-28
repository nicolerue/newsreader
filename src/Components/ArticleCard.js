import React, { useState } from "react";
import "./ArticleCard.css";

function ArticleCard({ article }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="article-card" onClick={openModal}>
        <div className="card-header">
          <h2>{article.title}</h2>
          <p>{article.publishedAt}</p>
        </div>
        <img
          className="card-image"
          src={article.urlToImage}
          alt={article.title}
        />
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{article.title}</h2>
            <p>{article.publishedAt}</p>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.content}</p>
            <p>Source: {article.source.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleCard;
