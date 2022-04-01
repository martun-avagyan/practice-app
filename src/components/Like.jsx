import React, { useContext } from "react";
import NewsContext from "../store/NewsContext";

function Like({ id }) {
  const newsContext = useContext(NewsContext);
  const likeHandler = () => {
    newsContext.state.news.forEach((item) => {
      if (item.id === id && item.isLiked === false) {
        newsContext.setState({
          news: [...newsContext.state.news],
          favorites: [...newsContext.state.favorites, (item.isLiked = true)],
        });
      }
    });
  };

  return (
    <div>
      <button onClick={likeHandler}>Like</button>
    </div>
  );
}

export default Like;
