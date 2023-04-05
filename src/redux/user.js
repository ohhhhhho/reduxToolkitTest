import { createSlice } from "@reduxjs/toolkit";

/** 리듀서 생성
 * name 리듀서 이름
 * initialState 데이터 초기값
 * reducers 상태가 변하면 어떻게 실행될지 정하는 부분
 * state는 초기값의 value를 가져오는 역하를한다.
 * action안에 payload,type이 있는데 바꾸고 싶은 데이터를 원하는곳에 넘겨주는 역할을 한다.
 * 리듀서를 만들면 스토어에 저장해야한다.
 */

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions; // 위의 login함수를 action기능이 작동하도록 다른데서 쓸거다
export default userSlice.reducer;
