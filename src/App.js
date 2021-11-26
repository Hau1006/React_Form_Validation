import React from "react";
import FormValidation from "./component/FormValidation";

const App = () => {
  // const [formValue, setFormValue] = useState({});
  // const [username, setUsername] = useState("");
  // const [hover, setHover] = useState(0);

  // const handleUsername = (e) => {
  //   const { value } = e.target;
  //   setUsername(value);
  //   setFormValue({ username: value });
  // };

  // const handleHover = () => {
  //   setHover(1);
  // };
  // // input, radio, checkbox, select
  // const handleSubmit = () => {
  //   console.log(formValue);
  //   setUsername("");
  //   setHover(0);
  // };
  return (
    <main>
      <FormValidation />
      {/* <div>
        <label>Username</label>
        <input
          onBlur={handleHover}
          value={username}
          onChange={handleUsername}
        />
        {username === "" && hover === 1 ? (
          <div style={{ color: "red" }}>Error</div>
        ) : (
          ""
        )}
        <button onClick={handleSubmit}>Submit</button>
      </div> */}
    </main>
  );
};

export default App;
