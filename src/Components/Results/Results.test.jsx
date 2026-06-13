import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen } from "../test-utils";
import Results from "./Results";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Results", () => {
  it("when loading state is true, renders the Loading text", () => {
    vi.stubGlobal("loading", true);

    render(<Results loading={loading} />);
    const loadingDiv = screen.getByText("LOADING . . .");

    expect(loadingDiv).toBeInTheDocument();
  });

  it("when there are results, the heading text is Results", () => {
    const mockResultObj = [
      {
        id: 1,
        artist: "Unicorn Princess",
        title: "Horn In My Side",
        location: "Stable 1",
      },
    ];
    vi.stubGlobal("filteredSearchResults", mockResultObj);

    render(<Results filteredSearchResults={filteredSearchResults} />);
    const heading = screen.getByText(/Results/i);

    expect(heading).toBeInTheDocument();
  });

  it.todo("when there are no results, the heading text is No Results");
  it.todo("renders the item info when there is a selected item.");
  it.todo("renders the results if there are filteredSearchResults");
  it.todo("write tests");
});
