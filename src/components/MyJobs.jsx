import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Details from "./Details";

function MyJobs({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);
  return (
    <div>
      <Row>
        <Col md={5}>
          {jobs.slice(0, 10).map((job) => (
            <div className="left-jobs-div my-4 py-2 px-5" key={job.id}>
              <h5 className="mb-0" style={{ textAlign: "start" }}>
                {job.title}
              </h5>
              <p style={{ textAlign: "start" }}>{job.company_name}</p>
              <div className="d-flex justify-content-between align-items-center pt-3">
                <p className="mb-0">
                  <span className="text-muted">Category:</span> {job.category}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="shadow-none"
                  onClick={() => setSelectedJob(job)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </Col>
        <Col md={7}>
          <Details selectedJob={selectedJob} />
        </Col>
      </Row>
    </div>
  );
}

export default MyJobs;
