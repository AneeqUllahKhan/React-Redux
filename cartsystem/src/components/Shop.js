import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { action } from "../state/index";

const Shop = () => {
  const dispatch = useDispatch();
  const { addMoney, minMoney } = bindActionCreators(action, dispatch);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://www.nexgenshop.pk/wp-content/uploads/2022/10/HP-3525-Ci5-11th-Gen-2-1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title">HP Laptop Windows 11</h5>
          <p className="card-text">Add This Item To Card</p>
          <div class="d-flex flex-row mb-3">
            <div class="p-2">
              {/* Dispatch Function */}
              {/* <buton
                className="btn btn-primary"
                onClick={() => dispatch(action.minMoney(100))}
              >
                -
              </buton> */}

              <buton className="btn btn-primary" onClick={() => minMoney(100)}>
                -
              </buton>
            </div>
            <div class="p-2">
              <h5 className="card-text">Rs 2000</h5>
            </div>
            <div class="p-2">
              <buton className="btn btn-primary" onClick={() => addMoney(100)}>
                +
              </buton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
