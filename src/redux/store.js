import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import themeReducer from "./theme";

/**
 * user.js에서 만든 리듀서를 스토어에 저장
 * 모든 state 관리
 */
export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});
