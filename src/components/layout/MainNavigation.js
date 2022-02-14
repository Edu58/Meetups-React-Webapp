import { Link } from 'react-router-dom'

function MainNavigation() {
  return (
    <header>
      <div className="logo">MeetUps</div>
      <nav>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/new-meetup"}>New Meetup</Link>
          <Link to={"/favourite"}>Favourite</Link>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
