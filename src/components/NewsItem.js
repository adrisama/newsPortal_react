import classes from './NewsItem.module.css';
import Card from './ui/card';

function NewsItem(props) {
  return (
    <Card>
        <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.urlToImage} alt={props.title} />
      </div>
      <div className={classes.content}>
        <address>{props.source.name}</address>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
      <a href={props.url} target="_blank" rel="noreferrer">Read More...</a>
      </div>
    </li>
    </Card>
  );
}

export default NewsItem;
