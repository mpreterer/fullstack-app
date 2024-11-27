import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [cont, setCount] = useState(0);

  return (
    <div className={classes.page}>
      <button onClick={() => setCount(cont + 1)}>+</button>
      <button onClick={() => setCount(cont - 1)}>-</button>
      <div>{cont}</div>
      <div>123</div>
    </div>
  );
};
