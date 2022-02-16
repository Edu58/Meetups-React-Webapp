import { useRef } from "react/cjs/react.development";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import classes from "./NewMeetUps.module.css";

function NewMeetUps() {
  const meetUpNameInputref = useRef();
  const addressInputref = useRef();
  const imageUrlInputref = useRef();
  const descriptionInputref = useRef();

  function SubmitHandler(event) {
    event.preventDefault();

    const meetUpName = meetUpNameInputref.current.value;
    const addressName = addressInputref.current.value;
    const imageUrl = imageUrlInputref.current.value;
    const descriptionInput = descriptionInputref.current.value;

    const newmeetUpData = {
      title: meetUpName,
      address: addressName,
      image: imageUrl,
      description: descriptionInput
    }
  }

  return (
    <Card>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={SubmitHandler}>
          <h3 className={classes.title}>Add meetUp</h3>

          <label htmlFor="meetup_title">Add meetUp Name</label>
          <input id="meetup_title" ref={meetUpNameInputref}></input>

          <label htmlFor="meetup_location">Address</label>
          <input id="meetup_location" ref={addressInputref}></input>

          <label htmlFor="meetup_image">Image URL</label>
          <input id="meetup_image" ref={imageUrlInputref}></input>

          <label htmlFor="meetup_description">Description</label>
          <textarea
            rows={8}
            id="meetup_description"
            ref={descriptionInputref}
          ></textarea>

          <Button>Add New meetUp</Button>
        </form>
      </div>
    </Card>
  );
}

export default NewMeetUps;
