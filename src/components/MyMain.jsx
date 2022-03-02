import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  FormControl,
  Badge,
} from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addToCartAction } from "../redux/action";
// import { Component } from "react";

const mapStateToProps = (state) => ({
  cartLength: state.cart.jobs.length,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (jobToAdd) => {
    dispatch(addToCartAction(jobToAdd));
  },
});

function MyMain(props) {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingg, setIsLoadingg] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchName, setSearchName] = useState("");

  const fetchJobs = async () => {
    try {
      let res = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${searchName}`
      );
      if (res.ok) {
        let data = await res.json();
        setJobs(data);
        setIsLoading(false);
      } else {
        console.log("error fetching!");
      }
    } catch (error) {
      console.log("Error fetching", error);
    }
  };

  return (
    <div>
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
          <Button
            className="ml-2 shadow-none"
            variant="primary"
            onClick={fetchJobs}
          >
            Search
          </Button>
          <div className="ml-auto">
            <Button
              className="ml-2 shadow-none fav-btn"
              variant="primary"
              // size="sm"
              onClick={() => navigate("/fav")}
            >
              Favorites
              <Badge size="lg" className="barge-fav" variant="info">
                {props.cartLength}
              </Badge>
            </Button>
          </div>
        </Row>
        <Row>
          <Col md={5}>
            {isLoading ? (
              // <Loader />
              <h6>Search for company names</h6>
            ) : (
              jobs.data
                // .slice(0, 20)
                // .filter((value) => {
                //   if (searchName === "") {
                //     return value;
                //   } else if (
                //     value.company_name
                //       .toLowerCase()
                //       .includes(searchName.toLowerCase())
                //   ) {
                //     return value;
                //   }
                // })
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
                  <div className="d-flex">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => navigate(`/${selectedJob.company_name}`)}
                    >
                      View Similar Jobs
                    </Button>
                    <Button
                      size="sm"
                      variant="primary"
                      className="ml-2"
                      onClick={() => this.addToCart(selectedJob)}
                    >
                      Add
                    </Button>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyMain);
