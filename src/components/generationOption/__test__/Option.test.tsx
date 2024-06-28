import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Option from "../index";

describe("Password generation option", () => {
  it("renders new option for password generation", () => {
    render(
      <Option
        id={"test"}
        text={"test"}
        toggled={{ test: false }}
        value={false}
        toggleOption={() => ""}
      />
    );

    const option = screen.getByRole("checkbox");
    const label = screen.getByLabelText("test");
    expect(option).toBeInTheDocument();
    expect(option).not.toBeChecked();
    expect(label).toBeInTheDocument();
  });
});
