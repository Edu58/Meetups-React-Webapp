import MeetUpList from "../components/meetups/MeetUpList";


const DATA = [
  {
    id: 1,
    title: "MeetUp 1",
    image:
      "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    description: "Under a tree",
  },
  {
    id: 2,
    title: "In The Snow",
    image:
      "https://images.pexels.com/photos/589840/pexels-photo-589840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Under a tree",
  },

  {
    id: 3,
    title: "On the Road",
    image:
      "https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "Under a tree",
  },
];


function AllMeetUps() {
  return (
    <MeetUpList meetups={ DATA }/>
  );
}

export default AllMeetUps;
