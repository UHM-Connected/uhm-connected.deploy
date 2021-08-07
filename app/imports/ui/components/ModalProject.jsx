import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider, List } from 'semantic-ui-react';

function ModalProject() {
  const [open, setOpen] = React.useState(false);

  return (
      <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button className='lmButton' compact floated='right'>Learn More</Button>}
      >
        <Modal.Header>Symbol Recognition <br/> Information and Computer Science, Al Goridems</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Grid columns={2} padded>
              <Grid.Row>
                <Image size='small' src="/images/symbol.png" wrapped />
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
              <Header as='h5'>The project to be pursued will be partially research-based and partially application-based.</Header>
            </Grid.Column>
            <Divider hidden/>
            <Grid.Column>
              <Header dividing size="small">Previous Projects</Header>
              <List bulleted>
                <List.Item>Binary Search Tree Research</List.Item>
                <List.Item>Operating Systems Kernel</List.Item>
              </List>
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

export default ModalProject;
