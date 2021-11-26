export default function validation(value) {
  let errors = {};
  // const re =
  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!value.username || value.username === "") {
    errors.username = "Username is required";
  }

  if (!value.email) {
    errors.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = "Email address is inValid";
  }

  if (!value.password) {
    errors.password = "Password is required";
  } else if (value.password.length < 6) {
    errors.password = "password needs to be 6 chacracter or more";
  }
  if (!value.password2) {
    errors.password2 = "password is required ";
  } else if (value.password2 !== value.password) {
    errors.password2 = "Password do no match ";
  }
  return errors;
}
