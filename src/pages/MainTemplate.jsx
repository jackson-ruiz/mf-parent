import React from "react";
import PropTypes from "prop-types";

const MainTemplate = (props) => {
  const { UserDataSection, LeftSideContent, ContentSideData } = props;
  return (
    <>
      <div data-testid="component-main-container" className="flex">
        <section
          data-testid="left-side-section"
          className="w-64 fixed left-0 top-0 h-screen bg-cyan-900 text-white text-center p-10"
        >
          {UserDataSection}
          <hr />
          <div data-testid="left-children">{LeftSideContent}</div>
        </section>
        <section data-testid="content-side-section" className="flex-1 ml-64">
          <div className="h-full p-10">
            <div data-testid="content-children">{ContentSideData}</div>
          </div>
        </section>
      </div>
    </>
  );
};

MainTemplate.propTypes = {
  UserDataSection: PropTypes.object,
  LeftSideContent: PropTypes.object,
  ContentSideData: PropTypes.object,
};

export default MainTemplate;
