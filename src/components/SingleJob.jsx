import React from "react";
import "./style.css";

function SingleJob({ job, changeJob, selectedJob }) {
  return (
    <div
      className={selectedJob?.id === job.id ? "border-thick mt-3" : "mt-3"}
      onClick={() => changeJob(job)}
      style={{ cursor: "pointer" }}
    >
      <div className="left-jobs-div">
        <h1>{job.title}</h1>
      </div>
    </div>
  );
}

export default SingleJob;
