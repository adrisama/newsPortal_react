import NewsItem from './NewsItem';
import classes from './NewsList.module.css';

function NewsList(props) {
  return (
    <ul className={classes.list}>
      {props.allnews.map((news) => (
        <NewsItem
          key={news.url}
          urlToImage={news.urlToImage}
          title={news.title}
          source={news.source}
          description={news.description}
          url={news.url}
        />
      ))}
    </ul>
  );
}

export default NewsList;