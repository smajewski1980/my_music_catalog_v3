import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach, vi } from "vitest";
import { fireEvent, render, screen } from "../test-utils";
import Results from "./Results";
import React from "react";

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

  it("when there are no results, the heading text is No Results", () => {
    vi.stubGlobal("filteredSearchResults", []);
    vi.stubGlobal("selectedItem", null);
    render(
      <Results
        filteredSearchResults={filteredSearchResults}
        selectedItem={selectedItem}
      />,
    );

    const heading = screen.getByText(/No Results/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the results if there are filteredSearchResults", () => {
    const mockResultObjs = [
      {
        id: 1,
        artist: "Unicorn Princess",
        title: "Horn In My Side",
        location: "Stable 1",
      },
      {
        id: 2,
        artist: "Unicorn Princess",
        title: "Horn In My Side",
        location: "Stable 2",
      },
    ];
    vi.stubGlobal("filteredSearchResults", mockResultObjs);
    vi.stubGlobal("selectedItem", null);

    render(
      <Results
        filteredSearchResults={filteredSearchResults}
        selectedItem={selectedItem}
      />,
    );
    const itemOne = screen.getByText(/Stable 1/i);
    const itemTwo = screen.getByText(/Stable 2/i);

    expect(itemOne).toBeInTheDocument();
    expect(itemTwo).toBeInTheDocument();
  });

  it("renders the item info when there is a selected item.", () => {
    const mockResultObj = {
      id: 1,
      artist: "Unicorn Princess",
      title: "Horn In My Side",
      location: "Stable 1",
      year: 1985,
      diameter: "12 inch",
      sleeve_condition: "***",
      record_condition: "***",
      label: "Capitol Records",
    };

    vi.stubGlobal("filteredSearchResults", mockResultObj);
    vi.stubGlobal("selectedItem", mockResultObj);

    render(
      <Results
        selectedItem={selectedItem}
        filteredSearchResults={filteredSearchResults}
      />,
    );

    const extraInfo = screen.getByText(/Capitol Records/i);

    expect(extraInfo).toBeInTheDocument();
  });

  it("sets the selected item when a valid item is clicked", () => {
    const mockResultObj = [
      {
        id: 1,
        artist: "Unicorn Princess",
        title: "Horn In My Side",
        location: "Stable 1",
        year: 1985,
        diameter: "12 inch",
        sleeve_condition: "***",
        record_condition: "***",
        label: "Capitol Records",
      },
    ];
    vi.stubGlobal("filteredSearchResults", mockResultObj);
    const setSelectedItem = vi.fn();

    render(
      <Results
        setSelectedItem={setSelectedItem}
        filteredSearchResults={filteredSearchResults}
      />,
    );

    vi.spyOn(React, "useState").mockImplementation((initial) => [
      initial,
      stateSetter,
    ]);
    const itemArtist = screen.getByText(/Unicorn Princess/i);
    fireEvent.click(itemArtist);

    expect(setSelectedItem).toHaveBeenCalledWith(mockResultObj[0]);
  });
});
