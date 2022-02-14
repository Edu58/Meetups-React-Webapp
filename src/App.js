import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetUps from "./pages/AllMeetUps";
import FavouriteMeetUps from "./pages/FavouriteMeetUps";
import NewMeetUps from "./pages/NewMeetUps";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetUps />} exact></Route>

        <Route path="/new-meetup" element={<NewMeetUps />} exact></Route>

        <Route path="/favourite" element={<FavouriteMeetUps />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
