import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nTestSetup from "shared/config/i18n/i18nTestSetup";

export interface componentRenderOptions {
  route?: string;
  initialState?: StateSchema;
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {}
) {
  const { route = "/", initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTestSetup}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
