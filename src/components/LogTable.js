import PropTypes from "prop-types";
import React from "react";

const LogTable = (props) => {
  return (
    <div className="log-box antialiased ">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="font-bold">
              <th>LEVEL</th>
              <th>DESCRIPTION</th>
              <th>EXAMPLE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold text-debug">DEBUG</td>
              <td>Meaningful for developers and sysadmin</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="font-bold text-info">INFO</td>
              <td>Reporting and metrics</td>
              <td>Start or stop service, request status code</td>
            </tr>
            <tr>
              <td className="font-bold text-warn">WARNING</td>
              <td>Potential app oddities, but will automatically recover</td>
              <td>
                Switching from a primary to backup server, retrying an operation
              </td>
            </tr>
            <tr>
              <td className="font-bold text-error">ERROR</td>
              <td>
                Fatal errors to operations, not the service or application.
              </td>
              <td>Can't open a required file, missing data</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

LogTable.propTypes = {};

export default LogTable;
