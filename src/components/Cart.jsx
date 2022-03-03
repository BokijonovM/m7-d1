import React, { useState, useEffect } from "react";
import { Button, Col, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addToCartActionWithThunk } from "../redux/action";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state) => ({
  cartLength: state.cart.jobs.length,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (jobToAdd) => {
    dispatch(addToCartActionWithThunk(jobToAdd));
  },
});

function Cart({ addToCart, cartLength }) {
  const params = useParams();
  const [cartJob, setCartJob] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(
          `https://strive-jobs-api.herokuapp.com/jobs?company=${params.company}`
        );
        if (res.ok) {
          let data = await res.json();
          console.log(data);
          setCartJob(data.data);
        } else {
          console.log("fetch error");
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="d-flex justify-content-center">
      {cartJob.map((job) => {
        return (
          <Col md={5}>
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
                  size="sm"
                  variant="primary"
                  className="ml-2 shadow-none"
                  onClick={() => addToCart(job)}
                >
                  Add
                </Button>
              </div>
            </div>
          </Col>
        );
      })}
      <Button
        className="ml-2 shadow-none fav-btn-1"
        variant="primary"
        onClick={() => navigate("/fav")}
      >
        Favorites
        <Badge size="lg" className="barge-fav-1" variant="info">
          {cartLength}
        </Badge>
      </Button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
