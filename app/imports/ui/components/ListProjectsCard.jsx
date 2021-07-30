import React from 'react';
import { Item, Grid, Divider, Header, Image, Label, Button } from 'semantic-ui-react';
import ModalProject from './ModalProject';

class ListProjectsCard extends React.Component {

  render() {
    /* const [open, setOpen] = React.useState(false); */
    const projectdesc = [
      ' The project to be pursued will be partially research-based and partially application-based. The former will take up the majority of the project timespan, ' +
      'while the latter will be focused on more thoroughly after extensive research is completed. The overall desire for the project is to have a working computer extension that allows a computing device created within the last five years ' +
      'to be able to detect symbols and patterns and provide accurate, descriptive analysis from various Microsoft files.',
    ].join(' ');

    return (

      <Item style={{ padding: '0rem 1.5rem 0.5rem 1.5rem' }}>
        <Item.Content>
          <Item.Header>
            <Header as={'name'} inverted style={{ paddingTop: '1.5 rem' }}>
              <Image size='huge' circular src="/images/symbol.png"/>
              Symbol Recognition, Information and Computer Sciences, Al Goridems
            </Header>
          </Item.Header>
          <Item.Description>
            <Grid.Column>
              <bio>
                <Header sub as={'h4'} style={{ paddingTop: '0.5rem ' }} inverted>
                    Project Description
                </Header>
                <Button as={ModalProject}/>
                <span>{projectdesc}</span>
              </bio>
            </Grid.Column>
            <Divider hidden>
              <Label size='tiny'>Algorithms</Label>
              <Label size='tiny'>Operating Systems</Label>
              <Label size='tiny'>Artificial Intelligence</Label>
            </Divider>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }
}

export default ListProjectsCard;
