import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { decr, incr } from "../modal/slice/counterSlice";
import { getCounterValue } from "../modal/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const inc = () => {
    dispatch(incr());
  };

  const dec = () => {
    dispatch(decr());
  };

  return (
    <div data-testid="counter-test">
      <h1 data-testid="counter-value">{counterValue}</h1>
      <Button data-testid="btn-incr" onClick={inc}>
        +
      </Button>
      <Button data-testid="btn-decr" onClick={dec}>
        -
      </Button>
    </div>
  );
};
