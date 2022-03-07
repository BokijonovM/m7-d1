import React, { useEffect } from "react";
import { removeFromCartAction } from "../redux/action";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function MyFav() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.jobs);
  const cartLength = useSelector((state) => state.cart.jobs.length);
  return (
    <div>
      <Container>
        <Row className="my-4">
          <Col md={8}>
            <ul style={{ listStyle: "none" }}>
              {cart.map((job, i) => (
                <li
                  key={i}
                  className="mb-4 d-flex fav-job-li justify-content-start align-items-center"
                >
                  <Button
                    className="ml-2"
                    variant="danger"
                    onClick={() => dispatch(removeFromCartAction(i))}
                  >
                    Delete
                  </Button>
                  <div className="d-flex flex-column align-items-start ml-3">
                    <h5 className="mb-0">{job.title}</h5>
                    <p className="mb-0">
                      <span className="text-muted">Company:</span>{" "}
                      {job.company_name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={4}>
            <h5>Total Fav jobs: {cartLength}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyFav;
