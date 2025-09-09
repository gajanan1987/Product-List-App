import BackLog from "./components/BackLog";
import Todo from "./components/Todo";
import Ongoing from "./components/Ongoing";
import Done from "./components/Done";
import { useState } from "react";

const Project1 = ({ tasks }) => {
  const [updateTask, setupdateTask] = useState(tasks);
  const backBtn = (s) => {
    const op = updateTask.map((item) => {
      return item.task == s ? { ...item, status: item.status - 1 } : item;
    });
    setupdateTask(op);
  };
  const nextBtn = (s) => {
    const op = updateTask.map((item) => {
      return item.task == s ? { ...item, status: item.status + 1 } : item;
    });
    setupdateTask(op);
  };
  return (
    <div className="project-wrapper">
      <BackLog tasks={updateTask} backBtn={backBtn} nextBtn={nextBtn} />
      <Todo tasks={updateTask} backBtn={backBtn} nextBtn={nextBtn} />
      <Ongoing tasks={updateTask} backBtn={backBtn} nextBtn={nextBtn} />
      <Done tasks={updateTask} backBtn={backBtn} nextBtn={nextBtn} />
    </div>
  );
};

export default Project1;
