import classes from "./index.module.css";

const Input = (props) => {
  const {
    label,
    placeholder,
    errorMessage,
    value,
    onChange,
    onBlur,
    type,
    variant,
    fieldName,
    disabled,
    ...rest
  } = props;

  return (
    <div className={classes.Input}>
      <label className={classes.label} htmlFor={label}>
        {label}
        <input
          className={`${classes.input} ${
            errorMessage ? classes.inputError : null
          }`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={!!disabled}
          name={fieldName}
          {...rest}
        />
        <span />
        {errorMessage && <span className={classes.span}>{errorMessage}</span>}
      </label>
    </div>
  );
};
export default Input;
