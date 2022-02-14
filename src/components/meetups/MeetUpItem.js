import classes from './MeetUpItem.module.css';

function MeetUpItem(props) {
  return (
    <div className={classes.grid}>
      <li key={props.id} className={classes.meetupItem}>
        <h3 className={classes.title}>{props.title}</h3>
        <img src={props.image} alt={props.title}></img>
        <p className={classes.description}>{props.description}</p>

        <div>
          <button className={classes.favouriteBtn}>Add to Favourites</button>
        </div>
      </li>
    </div>
  );
}

export default MeetUpItem;
