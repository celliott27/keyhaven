import { render, screen } from "@testing-library/react";
import { it, expect, describe, vi } from "vitest";
import { Nav, NavLink } from "./Nav";
import { usePathname } from "next/navigation";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("Nav", () => {
  const name = "products"
  const path = "/products"
  const renderComponent = () => {
    render(
      <Nav>
        <NavLink name={name} href={path} />
      </Nav>
    );
    return {
      link: screen.getByRole("link"),
    };
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("should render the NavLink with the correct inital props and class", () => {
    vi.mocked(usePathname).mockReturnValue("/home");
    const { link } = renderComponent();

    expect(link).toHaveTextContent(name);
    expect(link).toHaveAttribute("href", path);
    expect(link).not.toHaveClass("bg-background");
  });
  it("should render the NavLink with different background color when pathname is the same as href", async () => {
    vi.mocked(usePathname).mockReturnValue(path);
    const { link } = renderComponent();

    expect(link).toHaveClass("bg-background");
  });
});
