import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider } from 'semantic-ui-react';
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
            <Grid columns={4} padded>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Class Standing</Header>
                  <p>test</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Interests</Header>
                  <p>test</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Graduation Date</Header>
                  <p>test</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Status</Header>
                  <p>Student</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Work</Header>
                  <p>test</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >References</Header>
                  <p>test</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider/>
            <Grid.Column>
              <Header>
                Goals
              </Header>
              <Header as='h5'>Complete capstone project for graduation and find an internship where I can get hands-on experience in computer engineering.</Header>
            </Grid.Column>
            <Divider/>
            <Grid.Column>
              <Header>About</Header>
            </Grid.Column>
            <Divider/>
            <Grid.Column>
              <Header>Previous Experience</Header>
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
