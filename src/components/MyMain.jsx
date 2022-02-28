import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./style.css";
import MyHeader from "./MyHeader";
import Loader from "./Loader";
import List from "./List";
import Details from "./Details";

function MyMain({ addToCart }) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [endPost, setEndPost] = useState(10);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let res = await fetch("https://strive-jobs-api.herokuapp.com/jobs");
        if (res.ok) {
          let data = await res.json();
          console.log(data);
          setJobs(data.data);
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

  const changeJob = (job) => setSelectedJob(job);

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
            <List jobs={jobs} selectedJob={selectedJob} changeJob={changeJob} />
          </Col>
          <Col md={6}>
            <Details selectedJob={selectedJob} addToCart={addToCart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyMain;
