import { configureStore } from "@reduxjs/toolkit";

import educationReducer from "./educationSlice";
import skillsReducer from "./skillsSlice";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === "skills/addSkill/fulfilled") {
    const skills = store.getState().skills.items;
    localStorage.setItem("skills", JSON.stringify(skills));
  }

  return result;
};

export const store = configureStore({
  reducer: {
    education: educationReducer,
    skills: skillsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});