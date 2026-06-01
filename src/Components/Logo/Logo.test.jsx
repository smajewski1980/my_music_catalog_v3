import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders the logo image", () => {
    render(<Logo />);

    expect(
      screen.getByRole("img", { name: /The Majewski Collection/i }),
    ).toBeInTheDocument();
  });
});
