import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MeetUps</div>
      <nav>
        <ul className={classes.navlinks}>
          <Link to={"/"} className={classes.navlink}>
            Home
          </Link>
          <br></br>
          <Link to={"/new-meetup"} className={classes.navlink}>
            New Meetup
          </Link>
          <br></br>
          <Link to={"/favourite"} className={classes.navlink}>
            Favourite
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
