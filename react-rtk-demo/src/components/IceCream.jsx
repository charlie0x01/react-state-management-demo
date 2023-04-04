import React from "react";
import { ordered, restocked } from "../features/icecream/icecreamSlice";
import { useSelector, useDispatch } from "react-redux";

const IceCream = () => {
  const iceCreams = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => dispatch(ordered(1))}>Order Ice Cream</button>
        <button onClick={() => dispatch(restocked(2))}>
          Restock Ice Cream
        </button>
        <p>No of Ice Creams {iceCreams}</p>
      </div>
    </div>
  );
};

export default IceCream;
