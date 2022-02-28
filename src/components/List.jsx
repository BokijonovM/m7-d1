import React from "react";
import SingleJob from "./SingleJob";

function List({ selectedJob, jobs, changeJob }) {
  return (
    <div>
      {jobs.map((job) => {
        <SingleJob
          key={job.id}
          job={job}
          changeJob={changeJob}
          selectedJob={selectedJob}
        />;
      })}
    </div>
  );
}

export default List;
