import React from "react";
import { connect } from "react-redux";
import { removeFromCartAction } from "../redux/action";
import { Row, Col, Container, Button } from "react-bootstrap";

const mapStateToProps = (state) => ({
  cart: state.cart.jobs,
  cartLength: state.cart.jobs.length,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (index) => {
    dispatch(removeFromCartAction(index));
  },
});

function MyFav({ cart, cartLength, removeFromCart }) {
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
                    onClick={() => removeFromCart(i)}
                  >
                    Delete
                  </Button>
                  <div className="d-flex flex-column align-items-start ml-3">
                    <h5 className="mb-0">{job.title}</h5>
                    <p className="mb-0">{job.company_name}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyFav);
