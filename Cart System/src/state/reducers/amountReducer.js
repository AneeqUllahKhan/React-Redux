const reducer = (state = 0, action) => {
  if (action.type === "addMoney") {
    return state + action.payload;
  } else if (action.type === "minMoney") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
