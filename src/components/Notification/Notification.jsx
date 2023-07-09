import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={css.parag}>{message}</p>;
};

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
