export const addMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "addMoney",
      payload: amount,
    });
  };
};

export const minMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "minMoney",
      payload: amount,
    });
  };
};
