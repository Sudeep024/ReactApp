import "../App.css";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const history = useNavigate();

  return (
    <div>
      <button
        style={{
          backgroundColor: "beige",
          fontSize: "inherit",
          fontStyle: "normal",
          fontFamily: "serif",
          fontWeight: "900",
          border: "2px solid",
          padding: "5px",
        }}
        onClick={() => history("/alldata")}
      >
        Click here to get All the Employees Details
      </button>
    </div>
  );
};
export default HomePage;
