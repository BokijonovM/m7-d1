import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCartActionWithThunk } from "../redux/action";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (jobToAdd) => {
    dispatch(addToCartActionWithThunk(jobToAdd));
  },
});

function Details({ selectedJob, addToCart }) {
  return (
    <div>
      {selectedJob ? (
        <div className="mt-4 px-3">
          <div className="d-flex justify-content-between align-items-center px-5 pb-4">
            <h6 className="mb-0">{selectedJob.title}</h6>
            <div className="d-flex">
              <Link to={`/${selectedJob.company_name}`}>
                <Button variant="primary" size="sm">
                  View Similar Jobs
                </Button>
              </Link>
              <Button
                size="sm"
                variant="primary"
                className="ml-2 shadow-none"
                onClick={() => addToCart(selectedJob)}
              >
                Add
              </Button>
            </div>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: selectedJob.description,
            }}
          ></p>
        </div>
      ) : (
        <h5 className="mt-4">Select a job</h5>
      )}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
