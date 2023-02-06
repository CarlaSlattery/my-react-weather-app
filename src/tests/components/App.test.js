import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../components/App";

describe("App", () => {
  it("renders app component correctly", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders and errorMessage if API call not recognised", async () => {
    render(<App />);

    const searchFormInput = await screen.findByTestId("search-form-input");
    fireEvent.change(searchFormInput, { target: { value: "Paris" } });

    expect(
      await screen.findByText("Location not recognised - please try again")
    );
  });
});
