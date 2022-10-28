import React from "react";
import { Routes, Route } from "react-router-dom";
import MfChild from "../pages/remotes/MfChild";
import SamplePage from "./../pages/SamplePage";

const routeList = [
  {
    key: 1,
    path: "/",
    element: <SamplePage />,
  },
  {
    key: 2,
    path: "/tramites",
    element: <MfChild />,
  },
];

const TemplateContentManager = () => {
  return (
    <Routes>
      {routeList.map((routeItem) => {
        return (
          <Route
            key={routeItem.key}
            path={routeItem.path}
            element={routeItem.element}
          />
        );
      })}
    </Routes>
  );
};

export default TemplateContentManager;
