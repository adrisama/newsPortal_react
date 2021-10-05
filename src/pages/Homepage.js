import classes from "./HomePage.module.css";
import { useState, useEffect } from "react";
import NewsList from "../components/NewsList";

import {apiKey} from '../Api';

function HomePage(props) {
  const [loadedNews, setLoadedNews] = useState([]);

  useEffect(async () => {
    await fetch(
      `https://newsapi.org/v2/top-headlines/?category=${props.category}&apiKey=${apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => setLoadedNews(data.articles));
  }, []);

  return (
    <section>
      <h2 className={classes.title}>{props.heading}</h2>
      <NewsList allnews={loadedNews} />
    </section>
  );
}

export default HomePage;
