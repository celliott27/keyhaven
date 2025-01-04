import { render, screen } from "@testing-library/react";
import Home from "./page";
import {it, expect, describe} from "vitest"


describe("Home", () => {
  it("should show hello", () => {
    render(<Home />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
