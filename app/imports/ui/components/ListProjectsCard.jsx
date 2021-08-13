import React from 'react';
import { Item, Grid, Divider, Header, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import ModalProject from './ModalProject';

class ListProjectsCard extends React.Component {

  listResearch = () => this.props.project.researchArea.map(area => <Label.Group size='tiny' key={area.id}> <Label>{area}</Label> </Label.Group>)

  render() {

    return (

      <Item style={{ padding: '0rem 1.5rem 0.5rem 1.5rem' }}>
        <Grid.Column>
          <Item.Content>
            <Item.Header>
              <Header as={'name'} inverted style={{ paddingTop: '1.5 rem' }}>
                <Image size='huge' circular src={this.props.project.image}/>
                {this.props.project.projectName}
              </Header>
            </Item.Header>
            <Item.Description>
              <Grid.Column>
                <bio>
                  <Header sub as={'h4'} style={{ paddingTop: '0.5rem ' }} inverted>
                      Project Description
                  </Header>
                  <ModalProject project={this.props.project}/>
                  <span>{this.props.project.description}</span>
                </bio>
              </Grid.Column>
              <Divider hidden>
                {this.listResearch()}
              </Divider>
            </Item.Description>
          </Item.Content>
        </Grid.Column>
      </Item>
    );
  }
}

ListProjectsCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default withRouter(ListProjectsCard);
