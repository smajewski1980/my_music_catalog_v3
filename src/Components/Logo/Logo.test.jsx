import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./Logo";
import { describe, it, expect } from "vitest";
import CatalogProvider from "../../Context/CatalogProvider";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

describe("Logo", () => {
  it("renders the logo image", () => {
    render(<Logo />, {
      wrapper: ({ children }) => (
        <MemoryRouter>
          <CatalogProvider>{children}</CatalogProvider>
        </MemoryRouter>
      ),
    });

    expect(
      screen.getByRole("img", { name: /The Majewski Collection/i }),
    ).toBeInTheDocument();
  });
});
