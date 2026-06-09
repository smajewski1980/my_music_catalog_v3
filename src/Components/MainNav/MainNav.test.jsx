import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import MainNav from "./MainNav";

describe("MainNav", () => {
  it("renders the buttons for selecting a format", () => {
    render(<MainNav />);

    const btnAll = screen.getByText("SEARCH ALL");
    const btnCds = screen.getByText("CDS");
    const btnTapes = screen.getByText("TAPES");
    const btnRecords = screen.getByText("RECORDS");

    expect(btnAll).toBeInTheDocument();
    expect(btnCds).toBeInTheDocument();
    expect(btnTapes).toBeInTheDocument();
    expect(btnRecords).toBeInTheDocument();
  });
});
