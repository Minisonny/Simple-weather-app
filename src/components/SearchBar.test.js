import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

it("search some location", () => {
  const fn = jest.fn();
  render(<SearchBar onSearch={fn} />);

  fireEvent.change(screen.getByLabelText(/Find location/i), {
    target: { value: "Helsinki" }
  });

  fireEvent.click(screen.getByText(/search/i));

  expect(fn).toBeCalledWith("Helsinki");
});
