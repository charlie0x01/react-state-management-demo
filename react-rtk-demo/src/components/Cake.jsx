import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../features/cake/cakeSlice";

const Cake = () => {
  const cakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(2))}>Restock Cake</button>
        <p>No of cakes {cakes}</p>
      </div>
    </div>
  );
};

export default Cake;
