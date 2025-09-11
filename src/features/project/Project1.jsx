import BackLog from "./components/BackLog";
import Todo from "./components/Todo";
import Ongoing from "./components/Ongoing";
import Done from "./components/Done";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { right, left } from "../../redux/projectSlice";

const Project1 = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.project);

  const backBtn = (s) => {
    dispatch(left(s));
  };
  const nextBtn = (s) => {
    dispatch(right(s));
  };
  return (
    <div className="project-wrapper">
      <BackLog tasks={tasks} backBtn={backBtn} nextBtn={nextBtn} />
      <Todo tasks={tasks} backBtn={backBtn} nextBtn={nextBtn} />
      <Ongoing tasks={tasks} backBtn={backBtn} nextBtn={nextBtn} />
      <Done tasks={tasks} backBtn={backBtn} nextBtn={nextBtn} />
    </div>
  );
};

export default Project1;
