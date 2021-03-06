import React from 'react';
import { Grid, Loader, Header, Segment } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Users } from '../../api/user/User';

const bridge = new SimpleSchema2Bridge(Users.schema);

/** Renders the Page for editing a single document. */
class ProfileEditForm extends React.Component {

  // On successful submit, insert the data.
  submit(data) {
    const { email, firstname, lastname, profilepic, bio, major, standing, interests, skills, education, work, references, title, status, recentpublications, courses, department, _id } = data;
    Users.collection.update(_id, { $set: { firstName: firstname, lastName: lastname, image: profilepic, email, bio, major, classStanding: standing, interests, skills, education, work,
      references, title, status, recentPublications: recentpublications, courses, department } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  }

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  renderPage() {
    return (
      <Grid container centered>
        <Grid.Column>
          <Header as="h2" textAlign="center" inverted>Edit Volunteer Information</Header>
          <AutoForm schema={bridge} onSubmit={data => this.submit(data)} model={this.props.doc}>
            <Segment>
              <TextField name='firstName'/>
              <TextField name='lastName'/>
              <TextField name='image'/>
              <TextField name='goals'/>
              <TextField name='classStanding'/>
              <TextField name='interests'/>
              <TextField name='skills'/>
              <TextField name='education'/>
              <TextField name='work'/>
              <TextField name='major'/>
              <TextField name='bio'/>
              <TextField name='email'/>
              <TextField name='references'/>
              <SubmitField value='Submit'/>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

// Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use.
ProfileEditForm.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Users.adminPublicationName);
  // Determine if the subscription is ready
  const ready = subscription.ready();
  // Get the document
  const doc = Users.collection.findOne(documentId);
  return {
    doc,
    ready,
  };
})(ProfileEditForm);
