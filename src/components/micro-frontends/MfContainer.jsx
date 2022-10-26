import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const SamplePage = React.lazy(() => import("MfChildren/SamplePage"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

const MfContainer = () => {
  return (
    <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
      <h1>This is the Host!</h1>
      <hr />
      <h4>The next line comes from children site:</h4>
      <RemoteWrapper>
        <SamplePage />
      </RemoteWrapper>
    </div>
  );
};

export default MfContainer;
