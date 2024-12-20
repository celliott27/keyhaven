import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("should show hello", () => {
    render(<Home />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
