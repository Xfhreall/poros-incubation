import "../style/Card.css";
import { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  const [n1, setN1] = useState(1);
  const [n2, setN2] = useState(2);
  const [n3, setN3] = useState(3);
  const [n4, setN4] = useState(4);

  const increament1 = () => {
    setCount(count + 1);
    setN1(n1 + 1);
  };
  const increament2 = () => {
    setCount(count + 1);
    setN2(n2 + 2);
  };
  const increament3 = () => {
    setCount(count + 1);
    setN3(n3 + 3);
  };
  const increament4 = () => {
    setCount(count + 1);
    setN4(n4 + 4);
  };

  return (
    <>
      <div>
        <h3 style={{ color: "white", display: "flex" }}>
          {count} number changes detected
        </h3>
      </div>
      <div class="grid">
        <div
          id="box"
          class="boxIn1"
          style={{ backgroundColor: "#dbfb15" }}
          onClick={increament1}
        >
          {n1}
        </div>
        <div
          id="box"
          class="boxIn2"
          style={{ backgroundColor: "#2bf2fe" }}
          onClick={increament2}
        >
          {n2}
        </div>
      </div>
      <div
        id="box"
        class="box3"
        style={{ backgroundColor: "#f474ff" }}
        onClick={increament3}
      >
        {n3}
      </div>
      <div
        id="box"
        class="box4"
        style={{ backgroundColor: "#ff8a8a" }}
        onClick={increament4}
      >
        {n4}
      </div>
    </>
  );
};

export default Card;
