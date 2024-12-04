import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("Sidebar", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar-test")).toBeInTheDocument();
  });

  test("Sidebar toggle", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle-test");
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar-test")).toHaveClass("collapsed");
  });
});
