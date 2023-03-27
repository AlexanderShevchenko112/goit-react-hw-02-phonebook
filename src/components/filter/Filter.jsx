import PropTypes from 'prop-types';
import css from 'components/filter/Filter.module.css';
const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={css.filter}>
      <label htmlFor="filterInput">Filter contacts by name: </label>
      <input
        type="text"
        id="filterInput"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
