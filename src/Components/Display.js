// Display.js

import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import "./Display.css";

function Display({ articles }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="article-container">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Display;
