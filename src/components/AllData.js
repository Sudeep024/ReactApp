import "../App.css";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function AllData(props) {
  console.log("props", props.data);
  const history = useNavigate();
  const [state, setState] = useState([]);

  useEffect(() => {
    props.getAll();
  }, []);
  useEffect(() => {
    setState(props.data);
  }, [props.data]);

  console.log("Data", props.data);

  return (
    <>
      <div className="topnav">
        <button
          style={{
            backgroundColor: "beige",
            fontSize: "inherit",
            fontStyle: "normal",
            fontFamily: "serif",
            fontWeight: "700",
            border: "2px solid",
            padding: "5px",

            width: "500px",
            height: "100px",
          }}
        >
          All Employees Data
        </button>
      </div>
      <div>
        {state?.length > 0 &&
          state.map((data, index) => {
            return (
              <>
                <li
                  style={{
                    marginTop: "40px",
                    fontSize: "inherit",
                    fontStyle: "normal",
                    fontFamily: "montserrat",
                    border: "2px solid",
                    // textAlign: "center",
                  }}
                >
                  <a>{data?.employee_name}</a>
                  <button
                    style={{
                      marginLeft: "10%",
                    }}
                    onClick={() => {
                      props.setId(data?.id);
                      history("/employeedata");
                    }}
                  >
                    {" "}
                    Click here for Details
                  </button>
                </li>
              </>
            );
          })}
      </div>
    </>
  );
}
export default AllData;
