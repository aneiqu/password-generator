import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PasswordStrength from "../index";

describe("Password strength", () => {
  it("displays password strength", () => {
    render(<PasswordStrength passwordStrength={3} />);

    const strengthLevel = screen.getByText("MEDIUM");
    expect(strengthLevel).toBeInTheDocument();
  });
});
