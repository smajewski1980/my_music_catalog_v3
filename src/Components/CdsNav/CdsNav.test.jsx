import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import CdsNav from "./CdsNav";

describe("CdsNav", () => {
  it("renders the buttons for selecting a cd subFormat", () => {
    render(<CdsNav />);

    const btnAll = screen.getByText("ALL CDS");
    const btnMain = screen.getByText("CDS MAIN");
    const btnComps = screen.getByText("COMPILATIONS");
    const btnSingles = screen.getByText("SINGLES");

    expect(btnAll).toBeInTheDocument();
    expect(btnMain).toBeInTheDocument();
    expect(btnComps).toBeInTheDocument();
    expect(btnSingles).toBeInTheDocument();
  });
});
