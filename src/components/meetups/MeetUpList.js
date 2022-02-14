import MeetUpItem from "./MeetUpItem";
import classes from './MeetUpList.module.css';

function MeetUpList(props) {
  return (
    <div className={classes.meetup_list}>
      <ul className={classes.grid}>
        {props.meetups.map((meetup) => {
          return (
            <MeetUpItem
              key={meetup.id}
                  id={meetup.id}
                  title={meetup.title}
              image={meetup.image}
              description={meetup.description}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default MeetUpList;
