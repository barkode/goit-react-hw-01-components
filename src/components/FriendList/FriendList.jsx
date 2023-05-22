import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => FriendListItem(friend))}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = { friends: PropTypes.array.isRequired };
