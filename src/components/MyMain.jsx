import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "./style.css";
import MyHeader from "./MyHeader";
import Loader from "./Loader";

function MyMain({ addToCart }) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingg, setIsLoadingg] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchName, setSearchName] = useState("");

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

  return (
    <div>
      <MyHeader />
      <Container fluid>
        <Row className="m-2">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchName(e.target.value)}
              className="mr-sm-2 shadow-none"
            />
          </Form>
        </Row>
        <Row>
          <Col md={5}>
            {isLoading ? (
              <Loader />
            ) : (
              jobs.data
                .slice(0, 20)
                .filter((value) => {
                  if (searchName === "") {
                    return value;
                  } else if (
                    value.title.toLowerCase().includes(searchName.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((job) => {
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
                        <Button
                          variant="secondary"
                          size="sm"
                          className="shadow-none"
                          onClick={() => {
                            setSelectedJob(job);
                            setIsLoadingg(false);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  );
                })
            )}
          </Col>
          <Col md={7}>
            {isLoadingg ? (
              ""
            ) : (
              <div className="mt-4 px-3">
                <div className="d-flex justify-content-between align-items-center px-5 pb-4">
                  <h6 className="mb-0">{selectedJob.title}</h6>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => addToCart(selectedJob)}
                  >
                    Add
                  </Button>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: selectedJob.description }}
                ></p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyMain;
