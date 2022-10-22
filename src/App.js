import { Fragment } from "react";
import React from "react";
import AppRoutes from "config/rooter";
import HeaderNav from "component/header_nav";
import Footer from "component/footer";

const App = (props) => {
  return (
    <Fragment>
      <HeaderNav {...props} />
      <AppRoutes {...props} />
      <Footer {...props} />
    </Fragment>
  );
};

export default App;
