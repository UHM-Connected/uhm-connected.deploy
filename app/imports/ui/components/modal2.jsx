import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class ProfileModalFaculty extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  listCourses = () => this.props.user.courses.map(course => <List key={course.id} bulleted>
    <List.Item>{course}</List.Item>
  </List>)

  listProjects = () => this.props.user.previousProjects.map(project => <List key={project.id} bulleted>
    <List.Item>{project}</List.Item>
  </List>)

  render() {
    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        trigger={<Button className='lmButton' compact floated='right'>Learn More</Button>}
      >
        <Modal.Header>{this.props.user.firstName} {this.props.user.lastName}<br/> {this.props.user.department}, {this.props.user.status}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid columns={2} >
              <Grid.Row>
                <Image size='small' src="/images/alPic.png" wrapped />
                <Grid container columns={2}>
                  <Grid.Column width={6}>
                    <Icon name="mail"/>Email:<br/> {this.props.user.email}
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Icon name="linkedin"/>LinkedIn:<br/> {this.props.user.linkedIn}
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Icon name="github"/>GitHub:<br/> {this.props.user.github}
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Icon name="globe"/>Website:<br/> {this.props.user.website}
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid>
            <Divider/>
            <Grid columns={4} padded className="text-overflow-columns">
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Role</Header>
                  <p>{this.props.user.status}</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Interests</Header>
                  <p>{this.props.user.interests}</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Education</Header>
                  <p>{this.props.user.education}</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Status</Header>
                  <p>{this.props.user.status}</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Recent Publications</Header>
                  <p>{this.props.user.recentPublications}</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Courses Taught</Header>
                  {this.listCourses()}
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider/>
            <Grid.Column className="text-overflow-large">
              <Header>
                Goals
              </Header>
              <Header as='h5'>{this.props.user.goals}</Header>
            </Grid.Column>
            <Divider/>
            <Grid.Column className="text-overflow-large">
              <Header>About </Header>
              <p> {this.props.user.bio} </p>
            </Grid.Column>
            <Divider/>
            <Grid.Column className="text-overflow-large">
              <Header>Previous Projects </Header>
              {this.listProjects()}
            </Grid.Column>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button className='lmButton'
            content="Connect"
            labelPosition='right'
            icon='checkmark'
            onClick={() => this.setState({ setOpen: false })}
            positive
            as={NavLink} activeClassName="active" exact to="/ConnectForm"

          />
        </Modal.Actions>
      </Modal>
    );
  }
}

ProfileModalFaculty.propTypes = {
  user: PropTypes.object.isRequired,
};

export default withRouter(ProfileModalFaculty);
