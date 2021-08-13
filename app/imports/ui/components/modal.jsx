import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

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
            <Divider hidden/>
            <Grid.Column>
              <Header dividing>
                  Goals:
              </Header>
              <Header as='h5'>{this.props.user.goal}</Header>
            </Grid.Column>
            <Divider hidden/>
            <Grid.Column>
              <Header dividing size="small">Previous Experiences</Header>
              <List bulleted>
                <List.Item>{this.props.user.courses}</List.Item>
              </List>
            </Grid.Column>
            <Divider hidden/>
            <Grid.Column>
              <Header dividing size="small">Work Experience</Header>
              <List bulleted>
                <List.Item>{this.props.user.work}</List.Item>
              </List>
            </Grid.Column>
            <Divider hidden/>
            <Grid.Column>
              <Header dividing size="small">Recent Publications</Header>
              <List bulleted>
                <List.Item>{this.props.user.recentPublications}</List.Item>
              </List>
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

ProfileModalStudent.propTypes = {
  user: PropTypes.object.isRequired,
};

export default withRouter(ProfileModalStudent);
