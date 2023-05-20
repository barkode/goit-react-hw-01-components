import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendList/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => FriendListItem(friend))}
    </ul>
  );
}

export default FriendList;

FriendList.propTypes = { friends: PropTypes.array.isRequired };
