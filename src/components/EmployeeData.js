import "../App.css";

import { useNavigate } from "react-router-dom";

const EmployeeData = ({ data, id }) => {
  const history = useNavigate();
  return (
    <>
      <div>
        <table border={"1px solid black"}>
          <tr>
            <th style={{ textAlign: "center", padding: "2px" }}>Employee Id</th>
            <th style={{ textAlign: "center", padding: "2px" }}>
              Employee Name
            </th>
            <th style={{ textAlign: "center", padding: "2px" }}>
              Employee Age
            </th>
            <th style={{ textAlign: "center", padding: "2px" }}>
              {" "}
              Employee Salary
            </th>
          </tr>
          {data
            ?.filter((itm) => itm?.id == id)
            ?.map((itm) => {
              return (
                <tr>
                  <td style={{ textAlign: "center", padding: "2px" }}>
                    {itm?.id}
                  </td>
                  <td style={{ textAlign: "center", padding: "2px" }}>
                    {itm?.employee_name}
                  </td>
                  <td style={{ textAlign: "center", padding: "2px" }}>
                    {itm?.employee_age}
                  </td>
                  <td style={{ textAlign: "center", padding: "2px" }}>
                    {itm?.employee_salary}
                  </td>
                </tr>
              );
            })}
        </table>
        <div>
          <button
            style={{
              marginTop: "10px",
              backgroundColor: "#c8c8c8",
              fontSize: "inherit",
              fontStyle: "normal",
              fontFamily: "serif",
              fontWeight: "900",
              border: "2px solid",
              padding: "5px",
            }}
            onClick={() => history("/alldata")}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};
export default EmployeeData;
