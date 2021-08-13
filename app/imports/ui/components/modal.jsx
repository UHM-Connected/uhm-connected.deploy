import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

class ProfileModalStudent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  listInterests = () => this.props.user.interests.map(interest => <List key={interest.id} bulleted>
    <List.Item>{interest}</List.Item>
  </List>)

  listWork = () => this.props.user.work.map(work => <List key={work.id} bulleted>
    <List.Item>{work}</List.Item>
  </List>)

  listReferences = () => this.props.user.references.map(reference => <List key={reference.id} bulleted>
    <List.Item>{reference}</List.Item>
  </List>)

  render() {
    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        trigger={<Button className='lmButton' compact floated='right'>Learn More</Button>}
      >
        <Modal.Header>{this.props.user.firstName} {this.props.user.lastName}
          <br/> {this.props.user.major}, {this.props.user.classStanding}</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid columns={2} padded>
              <Grid.Row>
                <Image size='small' src="/images/annePic.png" wrapped/>
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
                    <Icon name="globe"/>Website:<br/> {this.props.user.email}
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid>
            <Divider/>
            <Grid columns={4} className="text-overflow-columns">
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Class Standing</Header>
                  <p>{this.props.user.classStanding}</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Interests</Header>
                  {this.listInterests()}
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Graduation Date</Header>
                  <p>{this.props.user.graduationDate}</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Status</Header>
                  <p>{this.props.user.status}</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Work</Header>
                  {this.listWork()}
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >References</Header>
                  {this.listReferences()}
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider/>
            <Grid.Column className="text-overflow-large">
              <Header>
                Goals
              </Header>
              <p>{this.props.user.goals}</p>
            </Grid.Column>
            <Divider/>
            <Grid.Column className="text-overflow-large">
              <Header>About</Header>
              <p> {this.props.user.bio} </p>
            </Grid.Column>
            <Divider/>
            <Grid.Column className="text-overflow-large">
              <Header>Previous Experience</Header>
              <p> {this.props.user.courses} </p>
            </Grid.Column>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button className='lmButton'
            content="Connect"
            labelPosition='right'
            icon='checkmark'
            onClick={() => this.setState({ setOpen: false })}
            positive as={NavLink} activeClassName="active" exact to="/ConnectForm"
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

ProfileModalStudent.propTypes = {
  user: PropTypes.object.isRequired,
};

export default withRouter(ProfileModalStudent);
