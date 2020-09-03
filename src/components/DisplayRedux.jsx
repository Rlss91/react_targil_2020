import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actionTypes from "../store/actions";

function DisplayRedux() {
  const counter = useSelector((state) => state.ctr.counter);

  const dispatch = useDispatch();

  return (
    <div>
      <br />
      <div>
        <h3>redux:</h3>
        <h4>{counter}</h4>
      </div>
    </div>
  );
}

export default DisplayRedux;
