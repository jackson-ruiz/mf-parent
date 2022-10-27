import React from "react";
import ErrorBoundary from "../../utils/ErrorBoundary";
const SamplePage = React.lazy(() => import("MfChildren/SamplePage"));

const RemoteWrapper = ({ children }) => (
  <ErrorBoundary>{children}</ErrorBoundary>
);

const MfChild = () => {
  return (
    <RemoteWrapper>
      <SamplePage />
    </RemoteWrapper>
  );
};

export default MfChild;
