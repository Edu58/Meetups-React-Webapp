import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./MeetUpItem.module.css";

function MeetUpItem(props) {
  return (
    <div className={classes.grid}>
      <Card>
        <li key={props.id} className={classes.meetupItem}>
          <h3 className={classes.title}>{props.title}</h3>
          <address className={classes.address}>{props.address}</address>
          <img src={props.image} alt={props.title}></img>
          <p className={classes.description}>{props.description}</p>

          <Button>Add To Favourites</Button>
        </li>
      </Card>
    </div>
  );
}

export default MeetUpItem;
