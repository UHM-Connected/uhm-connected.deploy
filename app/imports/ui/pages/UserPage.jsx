import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader, Grid, Image, Card, Divider, Icon, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Users } from '../../api/user/User';

class UserPage extends React.Component {
  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Creating Your Profile</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return ((!this.props.user.major) ? (
      <div className="faculty-profile-background">
        <Grid centered relaxed container>
          <Card fluid>
            <Card.Header className="faculty-header"><h2 className="faculty-header-text">{this.props.user.title}{this.props.user.firstName} {this.props.user.lastName} <br/> {this.props.user.department}</h2></Card.Header>
            <Divider/>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Image rounded size='medium' src={this.props.user.image} centered />
                </Grid.Column>
                <Grid.Column>
                  <br/><br/><br/>
                  <Icon name="mail"/>Email:
                  <p><br/>algor@hawaii.edu<br/><br/></p>
                  <Icon name="linkedin"/>LinkedIn:<br/>
                  <p><br/>algor@hawaii.edu<br/><br/></p>
                </Grid.Column>
                <Grid.Column>
                  <br/><br/><br/>
                  <Icon name="github"/>GitHub:<br/>
                  <p><br/>algor@hawaii.edu<br/><br/></p>
                  <Icon name="globe"/>Website:<br/>
                  <p><br/>algor@hawaii.edu<br/><br/></p>
                </Grid.Column>
              </Grid.Row>
              <Divider/>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Email</Header>
                  <Card.Meta>{this.props.user.email}</Card.Meta>
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
                  <Header as='h3' >Courses</Header>
                  <p>{this.props.user.courses}</p>
                </Grid.Column>
              </Grid.Row>
              <Divider/>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >About</Header>
                  <p> {this.props.user.bio} </p>
                </Grid.Column>
              </Grid.Row>
              <Divider/>
            </Grid>
            <Grid.Row>
              <Button
                floated='left'
                content="Edit"
                color='blue'
                labelPosition='right'
                icon='pencil alternate'
              />
              <Button
                floated='right'
                className='lmButton'
                content="Connect"
                labelPosition='right'
                icon='checkmark'
                positive
              />
            </Grid.Row>
          </Card>
        </Grid>
      </div>
    ) : (
      <div className="student-profile-background">
        <Grid centered relaxed container>
          <Card fluid>
            <Card.Header className="student-header"><h2 className="student-header-text">{this.props.user.firstName} {this.props.user.lastName} <br/> {this.props.user.major} {this.props.user.classStanding}</h2></Card.Header>
            <Divider/>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Image rounded size='medium' src={this.props.user.image} centered />
                </Grid.Column>
                <Grid.Column>
                  <br/><br/><br/>
                  <Icon name="mail"/>Email:
                  <p><br/>ajeyers@hawaii.edu<br/><br/></p>
                  <Icon name="linkedin"/>LinkedIn:<br/>
                  <p><br/>ajeyers@hawaii.edu<br/><br/></p>
                </Grid.Column>
                <Grid.Column>
                  <br/><br/><br/>
                  <Icon name="github"/>GitHub:<br/>
                  <p><br/>ajeyers@hawaii.edu<br/><br/></p>
                  <Icon name="globe"/>Website:<br/>
                  <p><br/>ajeyers@hawaii.edu<br/><br/></p>
                </Grid.Column>
              </Grid.Row>
              <Divider/>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Email</Header>
                  <Card.Meta>{this.props.user.email}</Card.Meta>
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
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >About</Header>
                  <p> {this.props.user.bio} </p>
                </Grid.Column>
              </Grid.Row>
              <Divider/>
            </Grid>
            <Grid.Row>
              <Button
                floated='left'
                content="Edit"
                color='blue'
                labelPosition='right'
                icon='pencil alternate'
              />
              <Button
                floated='right'
                className='lmButton'
                content="Connect"
                labelPosition='right'
                icon='checkmark'
                positive
              />
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
