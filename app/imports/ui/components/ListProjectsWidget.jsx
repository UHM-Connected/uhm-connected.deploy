import React from 'react';
import { Button, Dropdown, Grid, Item, Header, Input, Segment } from 'semantic-ui-react';
import ListProjectsCard from './ListProjectsCard';

class ListProjectsWidget extends React.Component {
  render() {
    const sticky = {
      position1: '-webkit-sticky',
      position: 'sticky',
      top: '6.5rem',
    };

    return (
      <div className="listProjects">
        <Grid container doubling relaxed stackable>
          <Grid.Row centered>
            <Header className='listProjectHeader' size={'large'} inverted style={{ paddingTop: '2rem' }}>
                All Projects
            </Header>
          </Grid.Row>
          <Grid.Column width={4}>

            <Segment className='filter' style={sticky}>
              <div style={{ paddingTop: '2rem' }}>
                <Header>
                  <Header.Content>
                      Total Projects:
                  </Header.Content>
                </Header>
              </div>
              <div style={{ paddingTop: '2rem' }}>
                <Input icon='search'
                  iconPosition='left'
                  placeholder='Search by Project name...'
                  fluid
                />
                <div style={{ paddingTop: '2rem' }}>
                  <Header>Faculty</Header>
                  <Dropdown
                    placeholder='Faculty'
                    fluid
                    selection
                  />
                </div>
                <div style={{ paddingTop: '2rem' }}>
                  <Header>Research Area</Header>
                  <Dropdown
                    placeholder='Research Area'
                    fluid
                    selection
                  />
                </div>
                <div style={{ paddingTop: '2rem' }}>
                  <Header>Department</Header>
                  <Dropdown
                    placeholder='Department'
                    fluid
                    selection
                  />
                </div>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            <Item.Group divided>
              <ListProjectsCard/>
            </Item.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default ListProjectsWidget;
