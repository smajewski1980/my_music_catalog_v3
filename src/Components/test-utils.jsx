import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CatalogProvider from "../Context/CatalogProvider";

const customRender = (ui, options) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter>
        <CatalogProvider>{children}</CatalogProvider>
      </MemoryRouter>
    ),
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render };
