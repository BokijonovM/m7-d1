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
import { addToCartAction } from "../redux/action";
import { Component } from "react";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  cartLength: state.cart.jobs.length,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (jobToAdd) => {
    dispatch(addToCartAction(jobToAdd));
  },
});

class MyMain extends Component {
  // const navigate = useNavigate();

  state = {
    jobs: [],
    selectedJob: null,
    searchName: "",
    isLoading: true,
    isLoadingg: true,
  };

  // const [jobs, setJobs] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isLoadingg, setIsLoadingg] = useState(true);
  // const [selectedJob, setSelectedJob] = useState(null);
  // const [searchName, setSearchName] = useState("");

  fetchJobs = async () => {
    try {
      let res = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${this.state.searchName}`
      );
      if (res.ok) {
        let data = await res.json();
        this.setState({
          jobs: data.data,
          isLoading: false,
        });
        // setJobs(data);
        // setIsLoading(false);
      } else {
        console.log("error fetching!");
      }
    } catch (error) {
      console.log("Error fetching", error);
    }
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row className="m-2">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                onChange={(e) => this.setState({ searchName: e.target.value })}
                // onChange={(e) => setSearchName(e.target.value)}
                className="mr-sm-2 shadow-none"
              />
            </Form>
            <Button
              className="ml-2 shadow-none"
              variant="primary"
              onClick={this.fetchJobs}
            >
              Search
            </Button>
            <div className="ml-auto">
              <Link to="/fav">
                <Button
                  className="ml-2 shadow-none fav-btn"
                  variant="primary"
                  // href="/fav"
                  // size="sm"
                  // onClick={() => ("/fav")}
                >
                  Favorites
                  <Badge size="lg" className="barge-fav" variant="info">
                    {this.props.cartLength}
                  </Badge>
                </Button>
              </Link>
            </div>
          </Row>
          <Row>
            <Col md={5}>
              {this.isLoading ? (
                // <Loader />
                <h6>Search for company names</h6>
              ) : (
                this.state.jobs.map((job) => {
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
                          onClick={() =>
                            this.setState({
                              selectedJob: job,
                              isLoadingg: false,
                            })
                          }
                          // onClick={() => {
                          //   setSelectedJob(job);
                          //   setIsLoadingg(false);
                          // }}
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
              {this.state.isLoadingg ? (
                ""
              ) : (
                <div className="mt-4 px-3">
                  <div className="d-flex justify-content-between align-items-center px-5 pb-4">
                    <h6 className="mb-0">{this.state.selectedJob.title}</h6>
                    <div className="d-flex">
                      <Button
                        variant="primary"
                        size="sm"
                        href={`/${this.state.selectedJob.company_name}`}
                        // onClick={() => navigate(`/${this.selectedJob.company_name}`)}
                      >
                        View Similar Jobs
                      </Button>
                      <Button
                        size="sm"
                        variant="primary"
                        className="ml-2"
                        onClick={() =>
                          this.props.addToCart(this.state.selectedJob)
                        }
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: this.state.selectedJob.description,
                    }}
                  ></p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMain);
