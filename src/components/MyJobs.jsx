import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Details from "./Details";

function MyJobs({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);
  return (
    <div>
      <Row>
        <Col md={5}>
          <div className="left-jobs-div my-4 py-2 px-5" key={jobs.id}>
            <h5 className="mb-0" style={{ textAlign: "start" }} key={jobs.id}>
              {jobs.title}
            </h5>
            <p style={{ textAlign: "start" }}>{jobs.company_name}</p>
            <div className="d-flex justify-content-between align-items-center pt-3">
              <p className="mb-0">
                <span className="text-muted">Category:</span> {jobs.category}
              </p>
              <Button
                variant="secondary"
                size="sm"
                className="shadow-none"
                onClick={() => setSelectedJob(jobs)}
              >
                View Details
              </Button>
            </div>
          </div>
        </Col>
        <Col md={7}>
          <Details selectedJob={selectedJob} />
        </Col>
      </Row>
    </div>
  );
}

export default MyJobs;
