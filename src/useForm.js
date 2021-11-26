import { useState } from "react";

const useForm = (validation) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, seterrors] = useState({});
  // const V_hover = [0, 1, 2, 3];
  const [hover, sethover] = useState(0);
  const onhover = () => {
    sethover(1);
  };
  const [hover2, sethover2] = useState(0);
  const onhover2 = () => {
    sethover2(2);
  };
  const [hover3, sethover3] = useState(0);
  const onhover3 = () => {
    sethover3(3);
  };
  const [hover4, sethover4] = useState(0);
  const onhover4 = () => {
    sethover4(4);
  };

  //   cai nay dung de lay gia tri nguoi dung
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    seterrors(validation(values));
    sethover(0);
    sethover2(0);
    sethover3(0);
    sethover4(0);
    console.log("value ne", values)
  };

  return {
    handleChange,
    onhover,
    onhover2,
    onhover3,
    onhover4,
    handleSubmit,
    values,
    errors,
    hover,
    hover2,
    hover3,
    hover4,
  };
};

export default useForm;
