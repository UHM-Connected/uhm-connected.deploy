import React from 'react';
import { Item, Grid, Divider, Header, Image, Label, Button } from 'semantic-ui-react';
import modal from './modal';

class ListUsersCard extends React.Component {

  render() {
    /* const [open, setOpen] = React.useState(false); */
    const aboutme = [
      ' Hi, my name is Anne Jean Eyers and I am a senior in computer engineering at UH Manoa. I am interested in software ' +
      'engineering, artificial intelligence, robotics, circuits, and machine learning. I am looking to find a faculty advisor ' +
      'who can help me develop a project to fulfill my capstone project requirement for graduation a',
    ].join(' ');

    return (

      <Item style={{ padding: '0rem 1.5rem 0.5rem 1.5rem' }}>
        <Item.Content>
          <Item.Header>
            <Header as={'name'} inverted style={{ paddingTop: '1.5 rem' }}>
              <Image size='huge' circular src="/images/annePic.png"/>
                Anne Jean Eyers, Computer Engineer, Senior
            </Header>
          </Item.Header>
          <Item.Description>
            <Grid.Column>
              <bio>
                <Header sub as={'h4'} style={{ paddingTop: '0.5rem ' }} inverted>
                    About Me
                </Header>
                <Button as={modal}/>
                <span>{aboutme}</span>
              </bio>
            </Grid.Column>
            <Divider hidden>
              <Label size='tiny'>Machine Learning</Label>
              <Label size='tiny'>Robotics</Label>
            </Divider>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default ListUsersCard;
