import React from "react";
import UserSesionInfo from "./components/user/UserSesionInfo";
// import MfContainer from "./components/micro-frontends/MfContainer";
import MainTemplate from "./pages/MainTemplate";

// const routeList = [
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/tramites",
//     element: (
//       <ErrorManagement>
//         <ProceduresPage />
//       </ErrorManagement>
//     ),
//   },
// ];

const App = () => {
  const LeftComponent = <p data-testid="left-component-data">Left Side Data</p>;
  const ContentComponent = <p data-testid="content-data">Content Data</p>;
  return (
    <>
      <MainTemplate
        UserDataSection={<UserSesionInfo />}
        LeftSideContent={LeftComponent}
        ContentSideData={ContentComponent}
      />
      {/* <h1>Hello World</h1>
      <p>
        <b>Esta es una variable de entorno de prueba:</b>{" "}
        {process.env.SAMPLE_ENVIRONMENT_VARIABLE}
      </p>
      <hr />
      <MfContainer /> */}
    </>
  );
};

export default App;
