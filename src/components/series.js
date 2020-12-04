import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

import { FormattedMessage } from "react-intl";

const SeriesList = (props) => {
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>
              <FormattedMessage id="Name" />
            </th>
            <th>
              <FormattedMessage id="Channel" />
            </th>
            <th>
              <FormattedMessage id="Description" />
            </th>
          </tr>
        </thead>
        <tbody>
          {props.series.map((serie) => (
            <tr>
              <td>{serie.id}</td>
              <td>{serie.name}</td>
              <td>{serie.channel}</td>
              <td>{serie.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
};
export default SeriesList;
