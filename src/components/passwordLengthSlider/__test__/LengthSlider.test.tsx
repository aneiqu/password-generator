import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LengthSlider from "../index";

describe("Password slider", () => {
  it("displays slider with default value of 0", () => {
    render(<LengthSlider sliderValue={0} setSliderValue={() => ""} />);

    const slider = screen.getByRole("slider");

    expect(slider).toBeInTheDocument();
    expect(slider).toHaveValue("0");
  });
});
