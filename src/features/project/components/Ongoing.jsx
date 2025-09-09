import React from "react";
const Ongoing = ({ tasks, backBtn, nextBtn }) => {
  return (
    <div>
      <h3>Ongoing</h3>
      {tasks
        ?.filter((item) => item.status === 2) // Assuming 1 is 'ToDo' status
        .map((item) => (
          <React.Fragment key={item.task}>
            <div className="task">
              {item.msg}
              <div>
                <button
                  className="btn btn-primary"
                  disabled={item.status == 0} // Left button is disabled if the status is not 1
                  onClick={() => backBtn(item.task)} // Calls backBtn to update status
                >
                  Left
                </button>{" "}
                <button
                  className="btn btn-primary"
                  disabled={item.status === 3} // Right button is disabled if the status is 3
                  onClick={() => nextBtn(item.task)} // Calls nextBtn to update status
                >
                  Right
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Ongoing;
