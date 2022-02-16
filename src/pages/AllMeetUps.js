import MeetUpList from "../components/meetups/MeetUpList";
import { useState, useEffect } from 'react'

function AllMeetUps() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetups-webapp-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allMeetUps = []

        for (const key in data) {
          const singleMeetup = {
            id: key,
            ...data[key],
          };

          allMeetUps.push(singleMeetup);
        };

        setIsLoading(false);
        setLoadedData(allMeetUps);
      });
  }, []);

  if (isLoading) {
    <section>
        <h1>Loading ...</h1>
      </section>
  }
  

  return <MeetUpList meetups={loadedData} />;
}

export default AllMeetUps;
