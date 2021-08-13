import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProfileModalFaculty extends React.Component {

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
        <Modal.Header>Al Goridems<br/> Department of Information and Computer Sciences, Faculty</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid columns={2} >
              <Grid.Row>
                <Image size='small' src="/images/alPic.png" wrapped />
                <Grid container columns={2}>
                  <Grid.Column width={6}>
                    <Icon name="mail"/>Email:<br/> algor@hawaii.edu
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Icon name="linkedin"/>LinkedIn:<br/> algor@hawaii.edu
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Icon name="github"/>GitHub:<br/> algor@hawaii.edu
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Icon name="globe"/>Website:<br/> algor@hawaii.edu
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid>
            <Divider/>
            <Grid columns={4} padded>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Role</Header>
                  <p>test</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Interests</Header>
                  <p>test</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Education</Header>
                  <p>test</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Header as='h3' >Status</Header>
                  <p>Student</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Recent Publications</Header>
                  <p>test</p>
                </Grid.Column>
                <Grid.Column>
                  <Header as='h3' >Courses Taught</Header>
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
              <Header>Previous Projects</Header>
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
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

ProfileModalFaculty.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileModalFaculty;
