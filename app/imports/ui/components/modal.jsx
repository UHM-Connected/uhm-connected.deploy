import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider, List } from 'semantic-ui-react';

function ProfileModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className='lmButton' compact floated='right'>Learn More</Button>}
    >
      <Modal.Header>Anne Jean Eyers <br/> Computer Engineer, Senior</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Grid columns={2} padded>
            <Grid.Row>
              <Image size='small' src="/images/annePic.png" wrapped />
              <Grid container columns={2}>
                <Grid.Column width={6}>
                  <Icon name="mail"/>Email:<br/> ajeyers@hawaii.edu
                </Grid.Column>
                <Grid.Column width={6}>
                  <Icon name="linkedin"/>LinkedIn:<br/> ajeyers@hawaii.edu
                </Grid.Column>
                <Grid.Column width={6}>
                  <Icon name="github"/>GitHub:<br/> ajeyers@hawaii.edu
                </Grid.Column>
                <Grid.Column width={6}>
                  <Icon name="globe"/>Website:<br/> ajeyers@hawaii.edu
                </Grid.Column>
              </Grid>
            </Grid.Row>
          </Grid>
          <Divider hidden/>
          <Grid.Column>
            <Header dividing>
              Goals:
            </Header>
            <Header as='h5'>Complete capstone project for graduation and find an internship where I can get hands-on experience in computer engineering.</Header>
          </Grid.Column>
          <Divider hidden/>
          <Grid.Column>
            <Header dividing size="small">Previous Experiences</Header>
            <List bulleted>
              <List.Item>EE 160: Programming for Engineers </List.Item>
            </List>
          </Grid.Column>
          <Divider hidden/>
          <Grid.Column>
            <Header dividing size="small">Work Experience</Header>
            <List bulleted>
              <List.Item>ITS Help Desk Student Assistant (Oct. 2019-present)</List.Item>
            </List>
          </Grid.Column>
          <Divider hidden/>
          <Grid.Column>
            <Header dividing size="small">Recent Publications</Header>
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
        />
      </Modal.Actions>
    </Modal>
  );
}

export default ProfileModal;
