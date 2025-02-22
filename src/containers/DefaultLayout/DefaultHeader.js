import React from "react";
import PropTypes from "prop-types";
import {AppNavbarBrand, AppSidebarToggler} from "@coreui/react";

import logo from "../../assets/img/brand/logo.svg";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

function DefaultHeader() {
  return (
    <React.Fragment>
      <AppNavbarBrand
        full={{src: logo, width: 30, height: 45, alt: "BISHOPS Logo"}}
        minimized={{src: logo, width: 30, height: 45, alt: "BISHOPS Logo"}}
      />
      <AppSidebarToggler className="ml-auto menu-toggler" mobile>
        <i className="fa fa-bars"></i>
      </AppSidebarToggler>
    </React.Fragment>
  );
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
