import css from "./Notification.module.css";

const Notification = ({ message = "" }) => {
  return <p className={css.wrapper}>{message}</p>;
};

export default Notification;
