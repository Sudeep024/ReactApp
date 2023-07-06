const initial_value = [];
const Reducer = (state = initial_value, action) => {
  switch (action.type) {
    case "GETALL":
      return action.data;

    default:
      return state;
  }
};
export default Reducer;
