import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={css.wrapper}>
      <table className={css['transaction-history']}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <TransactionHistoryItem item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistoryItem.propTypes = {
  items: PropTypes.array,
};
