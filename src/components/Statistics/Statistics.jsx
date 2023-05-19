import PropTypes from 'prop-types';

export const Statistics = ({ items, title }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {items.map(item => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string.isRequired,
};
