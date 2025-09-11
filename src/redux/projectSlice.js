import { createSlice } from "@reduxjs/toolkit";

const generateTasks = (numTasks) => {
  const tasks = [];

  for (let i = 1; i <= numTasks; i++) {
    tasks.push({
      task: i,
      msg: `ToDo ${i}`,
      status: 0,
    });
  }

  return tasks;
};
const tasks = generateTasks(10);

const initialState = {
  tasks: tasks,
  loading: false,
  error: null,
};
const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    right: (state, action) => {
      state.tasks = state.tasks.map((item) => {
        return item.task == action.payload
          ? { ...item, status: item.status + 1 }
          : item;
      });
    },
    left: (state, action) => {
      state.tasks = state.tasks.map((item) => {
        return item.task == action.payload
          ? { ...item, status: item.status - 1 }
          : item;
      });
    },
  },
});

export const { right, left } = projectSlice.actions;

export default projectSlice.reducer;
