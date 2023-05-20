import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';

export const App = () => {
  return (
    <>
      <p>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </p>
      <p>
        <Statistics title="Upload stats" stats={data} />
      </p>
      <p>
        <Statistics stats={data} />
      </p>
      <p>
        <FriendList friends={friends} />
      </p>
    </>
  );
};
