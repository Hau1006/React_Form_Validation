import React from "react";
import useForm from "../useForm";
import validation from "../validation";

export default function FormValidation() {
  const {
    handleChange,
    handleSubmit,
    onhover,
    onhover2,
    onhover3,
    onhover4,
    values,
    errors,
    hover,
    hover2,
    hover3,
    hover4,
  } = useForm(validation);
  // console.log("value", values);

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>create account</h1>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            value={values.username || ""}
            name="username"
            type="text"
            placeholder="Enter username"
            onChange={handleChange}
            onBlur={onhover}
          />
          {values.username === "" && hover === 1 ? (
            <p>Username is required</p>
          ) : (
            errors.username && <p>{errors.username}</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            value={values.email || ""}
            name="email"
            type="email"
            placeholder="Enter Email"
            onChange={handleChange}
            autoComplete="email"
            onBlur={onhover2}
          />
          {values.email === "" && hover2 === 2 ? (
            <p>Email is Required</p>
          ) : (
            errors.email && <p>{errors.email}</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="password">PassWord</label>
          <input
            value={values.password || ""}
            name="password"
            type="password"
            placeholder="Enter Passwork"
            onChange={handleChange}
            onBlur={onhover3}
          />
          {values.password === "" && hover3 === 3 ? (
            <p>Password is required</p>
          ) : (
            errors.password && <p>{errors.password}</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="password2">Confirm Password</label>
          <input
            value={values.password2 || ""}
            name="password2"
            type="password"
            placeholder="Enter Passwork agian"
            onChange={handleChange}
            onBlur={onhover4}
          />
          {values.password2 === "" && hover4 === 4 ? (
            <p>Password is required</p>
          ) : (
            errors.password2 && <p>{errors.password2}</p>
          )}
        </div>
        <button className=" submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
