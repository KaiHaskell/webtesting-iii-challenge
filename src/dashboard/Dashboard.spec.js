// Test away
import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("shows the controls and display", () => {
  const { getByText } = render(<Dashboard />);
  const display = getByText(/Open/i);
  const controls = getByText(/Close Gate/i);
  getByText(/Unlocked/i);

  expect(display).toBeDefined;
  expect(controls).toBeDefined;
  expect(display).toMatchSnapshot();
});
