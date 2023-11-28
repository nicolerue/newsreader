import Header from "./Components/Header";
import Display from "./Components/Display";
import ArticleCard from "./Components/ArticleCard";
import { articlesData } from "./Data/articles";
import { useEffect, useState } from "react";
import "./App.css";
import { getArticles } from "./apiCalls";
function App() {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await new Promise((resolve) => setTimeout(resolve, 1000));
  //       setArticles(articlesData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data.articles);
        console.log(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="app">
      <Header />
      <Display articles={articles} />
    </div>
  );
}

export default App;
