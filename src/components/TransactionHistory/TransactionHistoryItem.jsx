import PropTypes from 'prop-types';

export const TransactionHistoryItem = item => {
  return (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
