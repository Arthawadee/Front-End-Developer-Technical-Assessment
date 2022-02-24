import classes from "./index.module.css";

const Button = (props) => {
  const {
    label,
    type = "button",
    variant = "primary",
    onClick,
    disabled = false,
    style = null,
  } = props;

  const buttonClasses = [classes.Button];

  switch (variant) {
    case "primary":
      buttonClasses.push(classes.Primary);
      break;
    case "secondary":
      buttonClasses.push(classes.Secondary);
      break;
    case "link":
      buttonClasses.push(classes.Link);
      break;
    default:
      buttonClasses.push(classes.Primary);
  }

  return (
    <button
      type={type}
      className={buttonClasses.join(" ")}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {label}
    </button>
  );
};
export default Button;
