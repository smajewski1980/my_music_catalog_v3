import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, vi } from "vitest";
import { fireEvent, render, screen } from "../test-utils";
import Search from "./Search";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Search", () => {
  it("renders the correct text in the h1", () => {
    vi.stubGlobal("format", "cds");
    vi.stubGlobal("subFormat", "main");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const heading = screen.getByText("cds - main");

    expect(heading).toBeInTheDocument();
  });

  it("renders the correct field options when format is all", () => {
    vi.stubGlobal("format", "all");
    vi.stubGlobal("subFormat", "");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const optArtist = screen.queryByText("ARTIST");
    const optTitle = screen.queryByText("TITLE");
    const optLoc = screen.queryByText("LOCATION");

    expect(optArtist).toBeInTheDocument();
    expect(optTitle).not.toBeInTheDocument();
    expect(optLoc).not.toBeInTheDocument();
  });

  it("renders the correct field options when format is cds and subFormat is all", () => {
    vi.stubGlobal("format", "cds");
    vi.stubGlobal("subFormat", "all");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const optArtist = screen.queryByText("ARTIST");
    const optTitle = screen.queryByText("TITLE");
    const optLoc = screen.queryByText("LOCATION");

    expect(optArtist).toBeInTheDocument();
    expect(optTitle).toBeInTheDocument();
    expect(optLoc).not.toBeInTheDocument();
  });

  it("renders the correct field options when format is cds and subFormat is main", () => {
    vi.stubGlobal("format", "cds");
    vi.stubGlobal("subFormat", "main");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const optArtist = screen.queryByText("ARTIST");
    const optTitle = screen.queryByText("TITLE");
    const optLoc = screen.queryByText("LOCATION");

    expect(optArtist).toBeInTheDocument();
    expect(optTitle).toBeInTheDocument();
    expect(optLoc).toBeInTheDocument();
  });

  it("renders the correct field options when format is cds and subFormat is compilations", () => {
    vi.stubGlobal("format", "cds");
    vi.stubGlobal("subFormat", "compilations");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const optArtist = screen.queryByText("ARTIST");
    const optTitle = screen.queryByText("TITLE");
    const optLoc = screen.queryByText("LOCATION");

    expect(optArtist).not.toBeInTheDocument();
    expect(optTitle).toBeInTheDocument();
    expect(optLoc).toBeInTheDocument();
  });

  it("renders the correct field options when format is cds and subFormat is singles", () => {
    vi.stubGlobal("format", "cds");
    vi.stubGlobal("subFormat", "singles");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const optArtist = screen.queryByText("ARTIST");
    const optTitle = screen.queryByText("TITLE");
    const optLoc = screen.queryByText("LOCATION");

    expect(optArtist).toBeInTheDocument();
    expect(optTitle).toBeInTheDocument();
    expect(optLoc).not.toBeInTheDocument();
  });

  it("renders the correct field options when format is tapes and subFormat is all", () => {
    vi.stubGlobal("format", "tapes");
    vi.stubGlobal("subFormat", "all");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const optArtist = screen.queryByText("ARTIST");
    const optTitle = screen.queryByText("TITLE");
    const optLoc = screen.queryByText("LOCATION");

    expect(optArtist).toBeInTheDocument();
    expect(optTitle).toBeInTheDocument();
    expect(optLoc).not.toBeInTheDocument();
  });

  it("renders the correct field options when format is tapes and subFormat is not all", () => {
    vi.stubGlobal("format", "tapes");
    vi.stubGlobal("subFormat", "reel to reel");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const optArtist = screen.queryByText("ARTIST");
    const optTitle = screen.queryByText("TITLE");
    const optLoc = screen.queryByText("LOCATION");

    expect(optArtist).toBeInTheDocument();
    expect(optTitle).toBeInTheDocument();
    expect(optLoc).toBeInTheDocument();
  });

  it("renders the correct field options when format is records and subFormat is all", () => {
    vi.stubGlobal("format", "records");
    vi.stubGlobal("subFormat", "all");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const optArtist = screen.queryByText("ARTIST");
    const optTitle = screen.queryByText("TITLE");
    const optLoc = screen.queryByText("LOCATION");

    expect(optArtist).toBeInTheDocument();
    expect(optTitle).toBeInTheDocument();
    expect(optLoc).not.toBeInTheDocument();
  });

  it("renders the correct field options when format is records and subFormat is not all", () => {
    vi.stubGlobal("format", "records");
    vi.stubGlobal("subFormat", "45s");

    render(
      <Search
        format={format}
        subFormat={subFormat}
      />,
    );

    const optArtist = screen.queryByText("ARTIST");
    const optTitle = screen.queryByText("TITLE");
    const optLoc = screen.queryByText("LOCATION");

    expect(optArtist).toBeInTheDocument();
    expect(optTitle).toBeInTheDocument();
    expect(optLoc).toBeInTheDocument();
  });

  it("does nothing when searching all formats and search value is empty", () => {
    vi.stubGlobal("format", "all");
    vi.stubGlobal("searchValue", "");
    const setShowResults = vi.fn();

    render(
      <Search
        format={format}
        searchValue={searchValue}
        setShowResults={setShowResults}
      />,
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setShowResults).not.toHaveBeenCalled();
  });

  it("sets the ShowResults and setLoading states to true when the button is clicked", () => {
    vi.stubGlobal("format", "all");
    vi.stubGlobal("searchValue", "Unicorn");
    const setShowResults = vi.fn();
    const setLoading = vi.fn();

    render(
      <Search
        format={format}
        searchValue={searchValue}
        setShowResults={setShowResults}
        setLoading={setLoading}
      />,
    );

    const button = screen.getByRole("button", { name: /search/i });
    fireEvent.click(button);

    expect(setShowResults).toHaveBeenCalledWith(true);
    expect(setLoading).toHaveBeenCalledWith(true);
  });
});
