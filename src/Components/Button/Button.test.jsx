import "@testing-library/jest-dom/vitest";
import { describe, it, expect, afterEach } from "vitest";
import { render, screen } from "../test-utils";
import Button from "./Button";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Button", () => {
  it("renders a button with the text given through its props", () => {
    const testText = "test text";
    render(
      <Button
        path='/'
        text={testText}
      />,
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it("the Link has a to property value of the given prop", () => {
    const testText = "test text";

    render(
      <Button
        path={"/test-page"}
        text={testText}
      />,
    );

    const linkElement = screen.getByRole("link", { name: testText });
    expect(linkElement).toHaveAttribute("href", "/test-page");
  });
});
