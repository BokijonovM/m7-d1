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
import { connect } from "react-redux";
import { addToCartActionWithThunk } from "../redux/action";
import { Component } from "react";
import { Link } from "react-router-dom";
import { getJobsAction } from "../redux/action";
import MyJobs from "./MyJobs";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

const mapStateToProps = (state) => ({
  cartLength: state.cart.jobs.length,
  jobsFromReduxStore: state.job.stock,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (jobToAdd) => {
    dispatch(addToCartActionWithThunk(jobToAdd));
  },
  getJobs: () => {
    console.log("in mapDispatchToProps");
    dispatch(getJobsAction());
  },
});

function MyMain({ getJobs, cartLength, jobsFromReduxStore }) {
  const [searchName, setSearchName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    getJobs();
    setIsLoading(false);
  }, []);

  return (
    <div>
      <Container fluid>
        <Row className="m-2 align-items-center">
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchName(e.target.value)}
              className="mr-sm-2 shadow-none"
            />
          </Form>
          <Button className="mx-2 shadow-none" variant="primary">
            Search
          </Button>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control className="shadow-none" as="select">
              <option>Company Name</option>
              <option>Job Title</option>
              <option>City</option>
            </Form.Control>
          </Form.Group>
          <div className="ml-auto">
            <Link to="/fav">
              <Button className="ml-2 shadow-none fav-btn" variant="primary">
                Favorites
                <Badge size="lg" className="barge-fav" variant="info">
                  {cartLength}
                </Badge>
              </Button>
            </Link>
          </div>
        </Row>
        <Row>
          <Col md={12}>
            {isLoading ? (
              // <Loader />
              <h6>Search for company names</h6>
            ) : (
              <MyJobs jobs={jobsFromReduxStore} searchName={searchName} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMain);
