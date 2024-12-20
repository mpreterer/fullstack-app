import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "..";
import { screen } from "@testing-library/react";
import { fireEvent } from "@storybook/test";

describe("Counter comp", () => {
  test("should return counter value", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });

    expect(screen.getByTestId("counter-test")).toHaveTextContent("5");
  });
  test("incr", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    fireEvent.click(screen.getByTestId("btn-incr"));

    expect(screen.getByTestId("counter-value")).toHaveTextContent("6");
  });
  test("decr", () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    fireEvent.click(screen.getByTestId("btn-decr"));

    expect(screen.getByTestId("counter-value")).toHaveTextContent("4");
  });
});
