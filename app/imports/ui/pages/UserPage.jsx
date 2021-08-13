import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader, Grid, Image, Card, Divider, Icon, Button, List } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { Users } from '../../api/user/User';

class UserPage extends React.Component {

  listInterests = () => this.props.user.interests.map(interest => <List key={interest.id} bulleted>
    <List.Item>interest</List.Item>
  </List>)

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Creating Your Profile</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return ((!this.props.user.major) ? (
      <div className="faculty-profile-background">
        <Grid centered relaxed container textAlign='left'>
          <Card fluid>
            <Card.Header className="faculty-header"><h2 className="faculty-header-text" >{this.props.user.title}{this.props.user.firstName} {this.props.user.lastName} <br/> {this.props.user.department} </h2></Card.Header>
            <Divider/>
            <Grid columns={3} className="profile-columns" padded>
              <Grid.Row>
                <Grid.Column>
                  <Image rounded size='medium' src={this.props.user.image}/>
                </Grid.Column>
                <Grid.Column textAlign='left' >
                  <br/><br/><br/>
                  <Icon name="mail"/>Email:
                  <p><br/>{this.props.user.email}<br/><br/></p>
                  <Icon name="linkedin"/>LinkedIn:<br/>
                  <p><br/>{this.props.user.linkedIn}<br/><br/></p>
                </Grid.Column>
                <Grid.Column>
                  <br/><br/><br/>
                  <Icon name="github"/>GitHub:<br/>
                  <p><br/>{this.props.user.github}<br/><br/></p>
                  <Icon name="globe"/>Website:<br/>
                  <p><br/>{this.props.user.website}<br/><br/></p>
                </Grid.Column>
              </Grid.Row>
              <Divider/>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Role</Header>
                  <Card.Meta>{this.props.user.role}</Card.Meta>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Interests</Header>
                  {this.props.user.interests}
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Education</Header>
                  <p>{this.props.user.education}</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Status</Header>
                  <Card.Meta>Faculty Member</Card.Meta>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Recent Publications</Header>
                  {this.props.user.recentPublications}
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Courses Taught</Header>
                  <p>{this.props.user.courses}</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider/>
            <Grid.Row>
              <Grid.Column className="goal-section">
                <Header as='h3' >Goals</Header>
                <p> {this.props.user.goals} </p>
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Grid.Column className="about-section">
                <Header as='h3'>About</Header>
                <p> {this.props.user.bio} </p>
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Grid.Column className="previous-section">
                <Header as='h3' >Previous Projects</Header>
                <p> {this.props.user.projects} </p>
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Link to={`/profile/edit/${this.props.user._id}`}>Edit</Link>
            </Grid.Row>
          </Card>
        </Grid>
      </div>
    ) : (
      <div className="student-profile-background">
        <Grid centered relaxed container>
          <Card fluid>
            <Card.Header className="student-header"><h2 className="student-header-text">{this.props.user.firstName} {this.props.user.lastName} <br/> {this.props.user.major} </h2></Card.Header>
            <Divider/>
            <Grid columns={3} className="profile-columns" padded>
              <Grid.Row>
                <Grid.Column>
                  <Image rounded size='medium' src={this.props.user.image} />
                </Grid.Column>
                <Grid.Column>
                  <br/><br/>
                  <Icon name="mail"/>Email:
                  <p><br/>{this.props.user.email}<br/><br/></p>
                  <Icon name="linkedin"/>LinkedIn:<br/>
                  <p><br/>{this.props.user.linkedIn}<br/><br/></p>
                </Grid.Column>
                <Grid.Column>
                  <br/><br/>
                  <Icon name="github"/>GitHub:<br/>
                  <p><br/>{this.props.user.github}<br/><br/></p>
                  <Icon name="globe"/>Website:<br/>
                  <p><br/>{this.props.user.website}<br/><br/></p>
                </Grid.Column>
              </Grid.Row>
              <Divider/>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Class Standing</Header>
                  <Card.Meta>{this.props.user.classStanding}</Card.Meta>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Interests</Header>
                  {this.props.user.interests}
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Graduation Date</Header>
                  <p>{this.props.user.education}</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Status</Header>
                  <Card.Meta>Student</Card.Meta>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Work</Header>
                  {this.props.user.work}
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >References</Header>
                  <p>{this.props.user.references}</p>
                </Grid.Column>
              </Grid.Row>
              <Divider/>
              <Divider/>
            </Grid>
            <Grid.Row>
              <Grid.Column className="goal-section">
                <Header as='h3' >Goals</Header>
                <p> {this.props.user.goals} </p>
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Grid.Column className="about-section">
                <Header as='h3' >About</Header>
                <p> {this.props.user.bio} </p>
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Grid.Column className="previous-section">
                <Header as='h3' >Previous Experiences</Header>
                <p> {this.props.user.courses} </p>
              </Grid.Column>
            </Grid.Row>
            <Divider/>
            <Grid.Row>
              <Link to={`/profile/edit/${this.props.user._id}`}>Edit</Link>
            </Grid.Row>
          </Card>
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
