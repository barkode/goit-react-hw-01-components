import PropTypes from 'prop-types';

import { TransactionHistoryItem } from './TransactionHistoryItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{items.map(item => TransactionHistoryItem(item))}</tbody>
    </table>
  );
};

TransactionHistoryItem.propTypes = {
  items: PropTypes.array,
};
