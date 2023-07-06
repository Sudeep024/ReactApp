import axios from "axios";

export const SearchItemSuccess = (data) => {
  console.log(data);
  return {
    type: "GETALL",
    data,
  };
};

export const getAllData = () => {
  return (dispatch) => {
    try {
      const url = "https://dummy.restapiexample.com/api/v1/employees";
      const res = axios.get(url);
      res.then((res) => {
        if (res.status === 200) {
          dispatch(SearchItemSuccess(res.data?.data));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};
