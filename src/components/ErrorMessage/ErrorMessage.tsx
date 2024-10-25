import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.container}>
      <p className={css.error}>
        🤔 Something is wrong, please reload the page!
      </p>
    </div>
  );
};

export default ErrorMessage;
