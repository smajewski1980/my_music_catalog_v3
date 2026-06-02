import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach } from "vitest";
import { render, screen } from "../test-utils";
import Header from "./Header";

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
});
