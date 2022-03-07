import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCartActionWithThunk } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

function Details({ selectedJob }) {
  const [job, setJob] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setJob(selectedJob);
  }, [selectedJob]);

  const jobsInCart = useSelector((state) => state.cart.jobs);
  const isAlreadyInCart = jobsInCart.find((j) => j.id === job?.id);
  return (
    <div>
      {job ? (
        <div className="mt-4 px-3">
          <div className="d-flex justify-content-between align-items-center px-5 pb-4">
            <h6 className="mb-0">{job.title}</h6>
            <div className="d-flex">
              <Link to={`/${job.company_name}`}>
                <Button variant="primary" size="sm">
                  View Similar Jobs
                </Button>
              </Link>
              <Button
                size="sm"
                variant="primary"
                className="ml-2 shadow-none"
                onClick={() => dispatch(addToCartActionWithThunk(job))}
                disabled={isAlreadyInCart}
              >
                {isAlreadyInCart ? "Added" : "Add"}
              </Button>
            </div>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: job.description,
            }}
          ></p>
        </div>
      ) : (
        <h5 className="mt-4">Select a job</h5>
      )}
    </div>
  );
}

export default Details;
