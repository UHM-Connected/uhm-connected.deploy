import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader, Grid, Image, Container, Card, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Users } from '../../api/user/User';

class UserPage extends React.Component {
  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Creating Your Profile</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    const padding = { paddingTop: '25px', paddingBottom: '25px' };
    return ((!this.props.user.major) ? (
      <div className="faculty-profile-background">
        <Grid centered relaxed container>
          <Grid.Column>
            <Segment className="faculty-card">
              <Grid divided='vertically' relaxed container id="user-page" style={ padding }>
                <Grid.Row columns={2}>
                  <Grid.Column width={6}>
                    <Image rounded size='medium' src={this.props.user.image} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Container text className='description'>
                      <Header as='h2' >{this.props.user.title} {this.props.user.firstName} {this.props.user.lastName}</Header>
                      <Card.Meta>{this.props.user.email}</Card.Meta>
                      <Header as='h3' >Status</Header>
                      <p>Faculty Member</p>
                      <Header as='h3' >Department</Header>
                      {this.props.user.department}
                      <Header as='h3' >Interests</Header>
                      {this.props.user.interests}
                      <Header as='h3' >About</Header>
                      {this.props.user.bio}
                      <Header as='h3' >Recent Publications</Header>
                      {this.props.user.recentpublications}
                      <Header as='h3' >Courses</Header>
                      {this.props.user.courses}
                      <Header as='h3' >Education</Header>
                      <p>{this.props.user.education}</p>
                      <br/>
                      <Card.Content extra>
                        <Link to={`/editprofile/${this.props.user._id}`}>Edit Profile</Link>
                      </Card.Content>
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    ) : (
      <div className="student-profile-background">
        <Grid centered relaxed container>
          <Grid.Column>
            <Card fluid>
              <Card.Content>
                <Card.Header className="student-header"><h2 className="student-header-text">{this.props.user.firstName} {this.props.user.lastName}</h2></Card.Header>
              </Card.Content>
              <Grid divided='vertically' relaxed container id="student-card" style={ padding }>
                <Grid.Row columns={2}>
                  <Grid.Column width={6}>
                    <Image rounded size='medium' src={this.props.user.image} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Container text className='description'>
                      <Header as='h3' >Email</Header>
                      <Card.Meta>{this.props.user.email}</Card.Meta>
                      <Header as='h3' >Status</Header>
                      <p>Student</p>
                      <Header as='h3' >Major</Header>
                      {this.props.user.major}
                      <Header as='h3' >Interests</Header>
                      {this.props.user.interests}
                      <Header as='h3' >About</Header>
                      {this.props.user.bio}
                      <Header as='h3' >Class Standing</Header>
                      {this.props.user.standing}
                      <Header as='h3' >Work</Header>
                      {this.props.user.work}
                      <Header as='h3' >Education</Header>
                      <p>{this.props.user.education}</p>
                      <Header as='h3' >References</Header>
                      <p>{this.props.user.references}</p>
                      <br/>
                      <Card.Content extra>
                        <Link to={`/editprofile/${this.props.user._id}`}>Edit Profile</Link>
                      </Card.Content>
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    )
    );
  }
}

// Require an array of Recipes documents in the props.
UserPage.propTypes = {
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
  };
})(UserPage);
