import React from 'react';
import { Item, Grid, Divider, Header, Image, Label, Button } from 'semantic-ui-react';
import modal from './modal';
import modal2 from './modal2';

class ListUsersCard extends React.Component {

  render() {
    /* const [open, setOpen] = React.useState(false); */
    const aboutme = [
      ' Hi, my name is Anne Jean Eyers and I am a senior in computer engineering at UH Manoa. I am interested in software ' +
      'engineering, artificial intelligence, robotics, circuits, and machine learning. I am looking to find a faculty advisor ' +
      'who can help me develop a project to fulfill my capstone project requirement for graduation. ',
    ].join(' ');
    const aboutme2 = [
      ' Hello, my name is Al, and I am an associate professor in the Department of Information and Computer Sciences. I am interested ' +
      'in algorithms, artificial intelligence and computer systems, and am looking for a hard-working student, with a background in computing,' +
      ' to assist me in my project. The project can be counted as a thesis required for graduation, a project-based study, or an internship experience.',
    ].join(' ');

    return (

      <Item style={{ padding: '0rem 1.5rem 0.5rem 1.5rem' }}>
        <Grid.Column>
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
          <Divider hidden/>
          <Divider hidden/>
          <Item.Content>
            <Item.Header>
              <Header as={'name'} inverted style={{ paddingTop: '1.5 rem' }}>
                <Image size='huge' circular src="/images/alPic.png"/>
                Al Goridems, Information and Computer Sciences, Faculty
              </Header>
            </Item.Header>
            <Item.Description>
              <Grid.Column>
                <bio>
                  <Header sub as={'h4'} style={{ paddingTop: '0.5rem ' }} inverted>
                    About Me
                  </Header>
                  <Button as={modal2}/>
                  <span>{aboutme2}</span>
                </bio>
              </Grid.Column>
              <Divider hidden>
                <Label size='tiny'>Algorithms</Label>
                <Label size='tiny'>Operating Systems</Label>
              </Divider>
            </Item.Description>
          </Item.Content>
        </Grid.Column>
      </Item>
    );
  }
}

export default ListUsersCard;
