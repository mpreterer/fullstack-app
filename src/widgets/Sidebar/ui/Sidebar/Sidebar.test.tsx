import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Sidebar", () => {
  test("Sidebar", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar-test")).toBeInTheDocument();
  });

  test("Sidebar toggle", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle-test");
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar-test")).toHaveClass("collapsed");
  });
});
