import { Fragment } from "react";
import React, { useState } from "react";
import AppRoutes from "config/rooter";
import HeaderNav from "component/header_nav";
import Footer from "component/footer";

const App = (props) => {
  const [statusPencarian, setStatusPencarian] = useState(null);
  const closeHandler = (arg) => {
    setStatusPencarian(arg);
  };
  return (
    <>
      <HeaderNav {...props} statusPencarian={statusPencarian} />
      <AppRoutes {...props} closeHandler={closeHandler} />
      <Footer {...props} />
    </>
  );
};

export default App;
