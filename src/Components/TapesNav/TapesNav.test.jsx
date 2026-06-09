import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import TapesNav from "./TapesNav";

describe("TapesNav", () => {
  it("renders the buttons for selecting a tapes subFormat", () => {
    render(<TapesNav />);

    const btnAll = screen.getByText("ALL TAPES");
    const btn8Tr = screen.getByText("8-TRACKS");
    const btnCass = screen.getByText("CASSETTES");
    const btnReel = screen.getByText("REEL TO REEL");

    expect(btnAll).toBeInTheDocument();
    expect(btn8Tr).toBeInTheDocument();
    expect(btnCass).toBeInTheDocument();
    expect(btnReel).toBeInTheDocument();
  });
});
