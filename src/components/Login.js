import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/user";

function Login() {
  const dispatch = useDispatch(); // action을 보낼 수 있다.
  const onClickLogin = () => {
    dispatch(login({ name: "내이름", age: 20, email: "google@gmail.com" }));
  };
  const onClickLoout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button onClick={onClickLogin}>Login</button>
      <button onClick={onClickLoout}>Logout</button>
    </div>
  );
}

export default Login;
