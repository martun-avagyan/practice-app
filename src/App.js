import React, { useContext, useState } from "react";
import News from "./components/News";
import NewsContext from "./store/NewsContext";

function App() {
  const [state, setState] = useState({
    news: [
      { id: 1, title: "bla bla", isLiked: false },
      { id: 2, title: "bla bla bla", isLiked: false },
      { id: 3, title: "bla bla bla bla", isLiked: false },
      { id: 4, title: "bla bla bla bla bla", isLiked: false },
    ],
    favorites: [],
  });

  const ctx = useContext(NewsContext);
  console.log(ctx);
  return (
    <NewsContext.Provider value={{ state: state, setState: setState }}>
      <div>
        <h1>News</h1>
        <News news={state.news} />
      </div>
      <div>
        <h1>Stared</h1>
        {state.news.map((item) => {
          if (item.isLiked) {
            return <p key={item.id}>{item.title}</p>;
          }
        })}
      </div>
    </NewsContext.Provider>
  );
}

export default App;
