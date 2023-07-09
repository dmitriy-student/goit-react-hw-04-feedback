import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ optionsList, onLeaveFeedback }) => {
  return optionsList.map(el => (
    <button
      className={css.option_btn}
      key={el}
      onClick={() => onLeaveFeedback(el)}
    >
      {[el]}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  optionsList: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
