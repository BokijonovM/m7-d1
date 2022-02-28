import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./style.css";
import MyHeader from "./MyHeader";
import Loader from "./Loader";

function MyMain() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [endPost, setEndPost] = useState(10);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let res = await fetch("https://strive-jobs-api.herokuapp.com/jobs");
        if (res.ok) {
          let data = await res.json();
          console.log(data);
          setJobs(data);
          setIsLoading(false);
        } else {
          console.log("error fetching!");
        }
      } catch (error) {
        console.log("Error fetching", error);
      }
    };
    fetchJobs();
  }, []);

  const showMore = (number) => {
    if (jobs.length > 10) {
      setEndPost(endPost + 10);
    }
  };

  const showLess = (number) => {
    if (endPost > 10) {
      setEndPost(endPost - 10);
    }
  };

  return (
    <div>
      <MyHeader />
      <Container fluid>
        <Row>
          <Col md={6}>
            {isLoading ? (
              <Loader />
            ) : (
              jobs.data.slice(0, endPost).map((job) => {
                return (
                  <div className="left-jobs-div my-4 py-2 px-5" key={job.id}>
                    <h5 className="mb-0" style={{ textAlign: "start" }}>
                      {job.title}
                    </h5>
                    <p style={{ textAlign: "start" }}>{job.company_name}</p>
                    <div className="d-flex justify-content-between align-items-center pt-3">
                      <p className="mb-0">
                        <span className="text-muted">Category:</span>{" "}
                        {job.category}
                      </p>
                      <Button variant="secondary" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                );
              })
            )}
            <div className="mb-4">
              <Button
                className="mr-3"
                variant="secondary"
                onClick={(e) => showMore(+10)}
              >
                Show More
              </Button>
              <Button variant="secondary" onClick={(e) => showLess(-10)}>
                Show Less
              </Button>
            </div>
          </Col>
          <Col md={6}>ji</Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyMain;
