import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GeneratePasswordButton from "../index";

describe("Password generation button", () => {
  it("renders button to generate password", () => {
    render(<GeneratePasswordButton handleGenerate={() => ""} />);

    const buttonText = screen.getByRole("paragraph");
    expect(buttonText).toHaveTextContent("GENERATE");
  });
});
