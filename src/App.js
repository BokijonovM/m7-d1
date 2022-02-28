import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./components/MyHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMain from "./components/MyMain";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let res = await fetch("");
      } catch (error) {
        console.log("Error fetching", error);
      }
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <Routes>
          <Route path="/" element={<MyMain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
