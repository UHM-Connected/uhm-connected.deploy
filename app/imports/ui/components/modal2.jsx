import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider, List } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function ProfileModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
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
          <Divider hidden/>
          <Grid.Column>
            <Header dividing>
              Goals:
            </Header>
            <h5>I am looking for a hard-working student, with a background in computing, to assist me in my symbol recognition project.</h5>
          </Grid.Column>
          <Divider hidden/>
          <Grid.Column>
            <Header dividing size="small">Previous Projects</Header>
            <List bulleted>
              <List.Item>Binary Search Tree Research</List.Item>
              <List.Item>Operating Systems Kernel</List.Item>
            </List>
          </Grid.Column>
          <Divider hidden/>
          <Grid.Column>
            <Header dividing size="small">Courses Taught</Header>
            <List bulleted>
              <List.Item>ICS 311: Algorithms</List.Item>
              <List.Item>ICS 332: Operating Systems</List.Item>
              <List.Item>ICS 361: Introduction to Artificial Intelligence Programming</List.Item>            </List>
          </Grid.Column>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className='lmButton'
          content="Connect"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
          as={NavLink} activeClassName="active" exact to="/ConnectForm"
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ProfileModal;
