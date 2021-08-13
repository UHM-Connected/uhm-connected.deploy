import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ModalProject extends React.Component {

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
        <Modal.Header>{this.props.project.projectName} </Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid columns={2} padded>
              <Grid.Row>
                <Image size='small' src="/images/symbol.png" wrapped/>
                <Grid container columns={2}>
                  <Grid.Column width={6}>
                    <Icon name="mail"/>Email:<br/> {this.props.project.email}
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Icon name="linkedin"/>LinkedIn:<br/> {this.props.project.email}
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Icon name="github"/>GitHub:<br/> {this.props.project.email}
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Icon name="globe"/>Website:<br/> {this.props.project.email}
                  </Grid.Column>
                </Grid>
              </Grid.Row>
            </Grid>
            <Divider hidden/>
            <Grid.Column className="text-overflow-large">
              <Header dividing>
                  Goals:
              </Header>
              <Header as='h5'>{this.props.project.goal}</Header>
            </Grid.Column>
            <Divider hidden/>
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

ModalProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default withRouter(ModalProject);
