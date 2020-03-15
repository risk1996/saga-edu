import React from "react";
import "prismjs/themes/prism.css";

import "../global-styles";
import userConfig from "../../config";

import Header from "../components/Header";
import GlobalStyle from "../global-styles";

const Template = props => (
  <div>
    <GlobalStyle />
    <Header config={userConfig} />
    {props.children}
  </div>
);

export default Template;
