import css from "./OptionsButtons.module.css";

const Buttons = ({ onClick, children }) => (
  <button className={css.btn} onClick={onClick}>
    {children.charAt(0).toUpperCase() + children.slice(1)}
  </button>
);

export default Buttons;
