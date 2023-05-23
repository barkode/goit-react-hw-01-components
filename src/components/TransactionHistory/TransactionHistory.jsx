import PropTypes from 'prop-types';
import { TransactionHistoryItems } from './TransactionHistoryItem';
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
          <TransactionHistoryItems items={items} />
        </tbody>
      </table>
    </div>
  );
};

TransactionHistoryItems.propTypes = {
  items: PropTypes.array,
};
