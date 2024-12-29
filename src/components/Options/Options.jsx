import css from "./Options.module.css";
import OptionsButtons from "../OptionsButtons/OptionsButtons";

const Options = ({ options, updateFeedback, totalFeedback, clearFeedback }) => (
  <div className={css.wrapper}>
    {options.map((option) => (
      <OptionsButtons key={option} onClick={() => updateFeedback(option)}>
        {option}
      </OptionsButtons>
    ))}
    {totalFeedback() > 0 ? (
      <OptionsButtons onClick={clearFeedback}>Reset</OptionsButtons>
    ) : null}
  </div>
);

export default Options;
