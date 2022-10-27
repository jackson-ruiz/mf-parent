import { render } from "@testing-library/react";
import React from "react";
import MainTemplate from "./MainTemplate";

describe("Group of test for MainTemplate component", () => {
  test("should exist basic template structure", () => {
    const { getByTestId } = render(<MainTemplate />);

    expect(getByTestId("component-main-container")).toBeInTheDocument();
    expect(getByTestId("component-main-container").className).toBe("flex");

    expect(getByTestId("left-side-section")).toBeInTheDocument();
    expect(getByTestId("left-side-section").className).toBe(
      "w-64 fixed left-0 top-0 h-screen bg-cyan-900 text-white text-center p-10"
    );
    expect(getByTestId("left-children")).toBeInTheDocument();

    expect(getByTestId("content-side-section")).toBeInTheDocument();
    expect(getByTestId("content-side-section").className).toBe("flex-1 ml-64");
    expect(getByTestId("content-side-section").firstChild.className).toBe(
      "h-full p-10"
    );
    expect(getByTestId("content-children")).toBeInTheDocument();
  });

  test("should exist rendered data of children components", () => {
    const UserComponent = () => {
      return <h1 data-testid="user-info-data">User Info</h1>;
    };
    const LeftComponent = () => {
      return <p data-testid="left-component-data">Left Side Data</p>;
    };
    const ContentComponent = () => {
      return <p data-testid="content-data">Content Data</p>;
    };

    const { getByTestId } = render(
      <MainTemplate
        UserDataSection={<UserComponent />}
        LeftSideContent={<LeftComponent />}
        ContentSideData={<ContentComponent />}
      />
    );

    expect(getByTestId("user-info-data").innerHTML).toBe("User Info");
    expect(getByTestId("left-component-data").innerHTML).toBe("Left Side Data");
    expect(getByTestId("content-data").innerHTML).toBe("Content Data");
  });
});
