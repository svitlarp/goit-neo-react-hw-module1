import './App.css';
import FreindList from './components/friend-list/FriendList';
import Profile from './components/profile/Profile';
import userData from './userData.json';
import friends from './friends.json';


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
      <br></br>
      <FreindList friends={friends} />
    </>
  );
}

export default App;

