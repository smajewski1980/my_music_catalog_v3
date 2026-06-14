import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen, fireEvent } from "../test-utils";
import Header from "./Header";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Header", () => {
  it("renders the navigation buttons", () => {
    render(<Header />);

    const logoImg = screen.getByAltText(/the majewski collection/i);
    const btnSearchAll = screen.getByText(/search all/i);
    const btnCds = screen.getByText(/cds/i);
    const btnRecords = screen.getByText(/records/i);
    const btnTapes = screen.getByText(/tapes/i);

    expect(logoImg).toBeInTheDocument();
    expect(btnSearchAll).toBeInTheDocument();
    expect(btnCds).toBeInTheDocument();
    expect(btnRecords).toBeInTheDocument();
    expect(btnTapes).toBeInTheDocument();
  });

  it("renders the back button once a format is selected", () => {
    vi.stubGlobal("format", "cds");

    render(<Header format={format} />);

    const btnBack = screen.getByText(/back/i);

    expect(btnBack).toBeInTheDocument();
  });
});
