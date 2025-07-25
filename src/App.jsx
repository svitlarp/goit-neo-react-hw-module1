import './App.css'
import Profile from './components/profile/Profile'


const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

function App() {
  return (
    <>
      <Profile
        avatar={userData.avatar}
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        stats={userData.stats}
      />
    </>
  );
}

export default App;





  // The outer { ... } tells JSX: "This is JavaScript code"
  // The inner { name: "Veroniva Borregard" } is a JavaScript object — the actual value of the user prop
      // user={{
      //   name: "Veronika Borregard",
      //   tag: "@veronikaBor",
      //   location: "Minesota"
      // }}
      // followers={1234}
      // views={45}
      // likes={999}