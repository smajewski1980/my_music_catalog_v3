import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "../test-utils";
import Button from "./Button";
import React from "react";

describe("Button", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders a button with the text given through its props", () => {
    const testText = "test text";
    render(<Button text={testText} />);

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it("calls the given prop function with the given prop type", () => {
    const testText = "test text";
    const newVal = "new value";
    const stateSetter = vi.fn();

    render(
      <Button
        func={stateSetter}
        type={newVal}
        text={testText}
      />,
    );
    const button = screen.getByText(testText);

    vi.spyOn(React, "useState").mockImplementation((initial) => [
      initial,
      stateSetter,
    ]);

    fireEvent.click(button);

    expect(stateSetter).toHaveBeenCalledWith(newVal);
  });
});
