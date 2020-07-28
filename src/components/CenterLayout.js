import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames/bind";

export default ({className, ...attributes}) => (
  <div {...attributes} className={classNames("center-container", className)} />
);
