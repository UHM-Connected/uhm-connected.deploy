import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Loader } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';
import { Users } from '../../api/user/User';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Loading</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const menuStyle = { marginBottom: '10px', backgroundColor: '#1a3b29', borderBottom: '2px solid #b48415' };
    return (
      <Menu style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="active" exact to="/" key=''>Home</Menu.Item>
        <Menu.Item as={NavLink} activeClassName="active" exact to="/about" key='about'>About</Menu.Item>,
        <Menu.Item as={NavLink} activeClassName="active" exact to="/listProjects" key='listProjects'>List Projects</Menu.Item>
        <Menu.Item as={NavLink} activeClassName="active" exact to="/listusers" key='listusers'>List Users</Menu.Item>
        {this.props.currentUser ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/user" key='user'>My Profile</Menu.Item>
        ) : ''}

        {((this.props.currentUser !== '') && (this.props.user) && (!this.props.user.major)) ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/createprojects" key='createprojects'>Create New
            Project</Menu.Item>
        ) : ''}

        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown id="login-dropdown" text="Sign In/Sign Up" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="My Profile" as={NavLink} exact to="/user"/>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>

          )}
        </Menu.Item>
      </Menu>
    );
  }
}

// Declare the types of all properties.
NavBar.propTypes = {
  currentUser: PropTypes.string,
  user: PropTypes.object.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Recipes documents.
  const subscription = Meteor.subscribe(Users.userPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the Recipe that matches with the recipeID
  const user = Users.collection.findOne();
  return {
    ready,
    user,
    currentUser: Meteor.user() ? Meteor.user().username : '',
  };
})(NavBar);
