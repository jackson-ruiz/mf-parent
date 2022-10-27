import React from "react";
import MainMenu from "./components/MainMenu";
import UserSesionInfo from "./components/user/UserSesionInfo";
import { BrowserRouter } from "react-router-dom";
import MainTemplate from "./pages/MainTemplate";
import TemplateContentManager from "./components/TemplateContentManager";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainTemplate
          UserDataSection={<UserSesionInfo />}
          LeftSideContent={<MainMenu />}
          ContentSideData={<TemplateContentManager />}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
