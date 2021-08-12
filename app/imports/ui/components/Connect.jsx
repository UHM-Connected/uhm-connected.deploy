import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List person table. See pages/Listperson.jsx. */
class Connect extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.connect.firstName}</Table.Cell>
        <Table.Cell>{this.props.connect.lastName}</Table.Cell>
        <Table.Cell>{this.props.connect.email}</Table.Cell>
        <Table.Cell>{this.props.connect.phoneNumber}</Table.Cell>
        <Table.Cell>{this.props.connect.status}</Table.Cell>
        <Table.Cell>
          <Link to={`/connect/edit/${this.props.connect._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
Connect.propTypes = {
  connect: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Connect);
