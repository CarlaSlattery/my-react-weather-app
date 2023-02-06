import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 54,
    wind: {
      speed: 5,
      direction: "w",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);
    expect(getByText("Min: 12°C")).toBeInTheDocument();
    expect(getByText("Max: 22°C")).toBeInTheDocument();
    expect(getByText("Humidity: 54%")).toBeInTheDocument();
    expect(getByText("Wind: 5mph, w")).toBeInTheDocument();
  });
});
