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

class MyMain extends Component {
  // const navigate = useNavigate();

  state = {
    // jobs: [],
    selectedJob: null,
    searchName: "",
    isLoading: true,
    isLoadingg: true,
  };

  componentDidMount = async () => {
    console.log("this.props", this.props);

    this.props.getJobs();
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row className="m-2 align-items-center">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                onChange={(e) => this.setState({ searchName: e.target.value })}
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
                    {this.props.cartLength}
                  </Badge>
                </Button>
              </Link>
            </div>
          </Row>
          <Row>
            <Col md={12}>
              {this.isLoading ? (
                // <Loader />
                <h6>Search for company names</h6>
              ) : (
                <MyJobs
                  jobs={this.props.jobsFromReduxStore}
                  searchName={this.state.searchName}
                />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMain);

// this.state.jobs.map((job) => {
//   return (
//     <div className="left-jobs-div my-4 py-2 px-5" key={job.id}>
//       <h5 className="mb-0" style={{ textAlign: "start" }}>
//         {job.title}
//       </h5>
//       <p style={{ textAlign: "start" }}>{job.company_name}</p>
//       <div className="d-flex justify-content-between align-items-center pt-3">
//         <p className="mb-0">
//           <span className="text-muted">Category:</span> {job.category}
//         </p>
//         <Button
//           variant="secondary"
//           size="sm"
//           className="shadow-none"
//           onClick={() =>
//             this.setState({
//               selectedJob: job,
//               isLoadingg: false,
//             })
//           }
//           // onClick={() => {
//           //   setSelectedJob(job);
//           //   setIsLoadingg(false);
//           // }}
//         >
//           View Details
//         </Button>
//       </div>
//     </div>
//   );
// });
