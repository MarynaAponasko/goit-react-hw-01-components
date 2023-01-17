import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionsHistory/TransactionHistory';

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import items from './TransactionsHistory/transactions.json';

const App = () => {
  return (
    <>
      <h2 className="task-title">1 - Social network profile</h2>

      <Profile
        userName={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <h2 className="task-title">2- Statistics Section</h2>
      <Statistics stats={data} />
      <p className="alternatine">OR</p>
      <Statistics title="Upload stats" stats={data} />
      <h2 className="task-title">3 - Friends list</h2>
      <FriendList friends={friends} />
      <h2 className="task-title">4 - Transaction History</h2>
      <TransactionHistory items={items} />
    </>
  );
};

export default App;
