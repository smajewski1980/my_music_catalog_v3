import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "../test-utils";
import RecordsNav from "./RecordsNav";

describe("RecordsNav", () => {
  it("renders the buttons for selecting a records subFormat", () => {
    render(<RecordsNav />);

    const btnAll = screen.getByText("ALL RECORDS");
    const btn33s = screen.getByText("33s");
    const btn45s = screen.getByText("45s");
    const btn78s = screen.getByText("78s");

    expect(btnAll).toBeInTheDocument();
    expect(btn33s).toBeInTheDocument();
    expect(btn45s).toBeInTheDocument();
    expect(btn78s).toBeInTheDocument();
  });
});
