import "./App.css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import { getAllData } from "./redux/action";
import { useDispatch } from "react-redux";

import { BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllData from "./components/AllData";
import EmployeeData from "./components/EmployeeData";

function App(props) {
  const [id, setId] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                getAll={props.getAll}
                data={props.data}
                id={id}
                setId={setId}
              />
            }
          />
          <Route
            path="/alldata"
            element={
              <AllData
                getAll={props.getAll}
                data={props.data}
                id={id}
                setId={setId}
              />
            }
          />
          <Route
            path="/employeedata"
            element={
              <EmployeeData
                getAll={props.getAll}
                data={props.data}
                id={id}
                setId={setId}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getAll: () => dispatch(getAllData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
