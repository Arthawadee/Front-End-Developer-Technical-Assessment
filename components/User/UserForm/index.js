import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import useInput from "../../../hooks/use-input";
import { addUser } from "../../../redux/actions/userActions";

const emailFormat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneNoFormat = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => emailFormat.test(value);
const isPhoneNo = (value) => phoneNoFormat.test(value);

const UserForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    value: fullNameValue,
    isValid: fullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    valueBlurHandler: fullNameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput(isEmail);
  const {
    value: phoneNoValue,
    isValid: phoneNoIsValid,
    hasError: phoneNoHasError,
    valueChangeHandler: phoneNoChangeHandler,
    valueBlurHandler: phoneNoBlurHandler,
  } = useInput(isPhoneNo);

  let formIsValid = false;

  if (fullNameIsValid && emailIsValid && phoneNoIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (e) => {
    const formValue = {
      fullName: fullNameValue,
      email: emailValue,
      phoneNo: phoneNoValue,
    };
    e.preventDefault();
    if (formIsValid) {
      dispatch(addUser(formValue));
      router.push("/");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} noValidate autoComplete="off">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={8} md={6} xl={4}>
          <div className="whiteContainer">
            <h1>Create New User</h1>
            <Input
              fieldName="fullName"
              label="Full Name"
              value={fullNameValue}
              onChange={fullNameChangeHandler}
              onBlur={fullNameBlurHandler}
              placeholder="Full Name"
              errorMessage={
                fullNameHasError ? "Please enter a full name." : null
              }
            />
            <Input
              fieldName="email"
              label="Email Address"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              placeholder="Email Address"
              errorMessage={
                emailHasError ? "Please enter a email address." : null
              }
            />
            <Input
              fieldName="phoneNo"
              label="Phone Number"
              value={phoneNoValue}
              onChange={phoneNoChangeHandler}
              onBlur={phoneNoBlurHandler}
              placeholder="123-456-7890"
              errorMessage={
                phoneNoHasError ? "Please enter a phone number." : null
              }
            />
            <Grid container justifyContent="center" alignItems="center">
              <Button
                variant="secondary"
                type="button"
                label="Cancel"
                onClick={() => router.push("/")}
              />
              <Button
                variant="primary"
                type="submit"
                label="Submit"
                disabled={!formIsValid}
                style={{ marginLeft: "10px" }}
              />
            </Grid>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;
