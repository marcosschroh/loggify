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
              <td>Meaningful for developers, IT, sysadmin</td>
              <td>-</td>
            </tr>
            <tr>
              <td className="font-bold text-info">INFO</td>
              <td>Useful information to have</td>
              <td>Start or stop service, configuration</td>
            </tr>
            <tr>
              <td className="font-bold text-warn">WARNING</td>
              <td>
                Can potentially cause application oddities, but will
                automatically recover
              </td>
              <td>
                Switching from a primary to backup server, retrying an operation
              </td>
            </tr>
            <tr>
              <td className="font-bold text-error">ERROR</td>
              <td>
                Any error fatal to the operation, but not the service or
                application
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
