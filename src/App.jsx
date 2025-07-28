import './App.css';
import FreindList from './components/friend-list/FriendList';
import Profile from './components/profile/Profile';
import TransactionHistory from './components/transaction-history/TransactionHistory';
import userData from './data/userData.json';
import friends from './data/friends.json';
import transactionHistory from './data/transactionHistory.json';


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
      <br></br>
      <TransactionHistory items={ transactionHistory } />
    </>
  );
}

export default App;

