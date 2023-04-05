import React from "react";
import { useSelector } from "react-redux";

/**
 * useSelector를 이용하면 내가 만든 리듀서에 접근이 가능하다
 *
 */

function Profile() {
  const user = useSelector((state) => state.user.value); // user.js안에 있는 name:"user" state에 접근한다.
  const themeColor = useSelector((state) => state.theme.value);
  console.log(themeColor);
  return (
    <>
      <div style={{ color: themeColor }}>
        <h1>Profile Page</h1>
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
        <p>Email : {user.email}</p>
      </div>
    </>
  );
}

export default Profile;
