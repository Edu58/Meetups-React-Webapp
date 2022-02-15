import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/layout/Main Navigation/MainNavigation";
import AllMeetUps from "./pages/AllMeetUps";
import FavouriteMeetUps from "./pages/FavouriteMeetUps";
import NewMeetUps from "./pages/NewMeetUps";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetUps />}></Route>

        <Route path="/new-meetup" element={<NewMeetUps />}></Route>

        <Route path="/favourite" element={<FavouriteMeetUps />}></Route>
      </Routes>
    </div>
  );
}

export default App;
