import Button from '../components/UI/Button';
import Card from '../components/UI/Card'
import classes from './NewMeetUps.module.css'

function NewMeetUps() {
  return (
    <Card>
      <div className={classes.container}>
        <form className={classes.form}>
          <h3 className={classes.title}>Add meetUp</h3>

          <label htmlFor="meetup_title">Add meetUp Name</label>
          <input id="meetup_title"></input>

          <label htmlFor="meetup_location">Place Name</label>
          <input id="meetup_location"></input>

          <label htmlFor="meetup_image">Image URL</label>
          <input id="meetup_image"></input>

          <label htmlFor="meetup_description">Description</label>
          <textarea rows={8} id="meetup_description"></textarea>

          <Button>Add New meetUp</Button>
        </form>
      </div>
    </Card>
  );
}

export default NewMeetUps;
