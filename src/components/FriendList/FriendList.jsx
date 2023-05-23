import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          name={name}
          avatar={avatar}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = { friends: PropTypes.array.isRequired };
