import React from "react";
import { Routes, Route } from "react-router-dom";
import MfChild from "../pages/remotes/MfChild";
import SamplePage from "./../pages/SamplePage";

const routeList = [
  {
    path: "/",
    element: <SamplePage />,
  },
  {
    path: "/tramites",
    element: <MfChild />,
  },
];

const TemplateContentManager = () => {
  return (
    <Routes>
      {routeList.map((routeItem) => {
        return <Route path={routeItem.path} element={routeItem.element} />;
      })}
    </Routes>
  );
};

export default TemplateContentManager;
