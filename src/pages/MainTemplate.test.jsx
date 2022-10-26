import { render, screen } from "@testing-library/react";
import React from "react";
import MainTemplate from "./MainTemplate";

describe("Group of test for MainTemplate component", () => {
  test("should exist leftside and rightside", () => {
    const { getByTestId } = render(<MainTemplate />);
    screen.debug();
    expect(getByTestId("left-side")).toBeInTheDocument();
    expect(getByTestId("content-side")).toBeInTheDocument();
  });
});
