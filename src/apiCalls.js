export const getArticles = () => {
  return fetch(
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=52f970b11dc34599b9faedb32d136760"
  ).then((response) => response.json());
};
