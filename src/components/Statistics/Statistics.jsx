import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getBgColor } from '../utils/StatisticsBgColor';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      <div className={css.wrapper}>
        {{ title } && <h2 className={css.title}>{title}</h2>}
        <ul className={css['stat-list']}>
          {stats.map(({ id, label, percentage }) => (
            <li className={`${css.item} ${css[getBgColor(label)]}`} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}> {percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string,
};
