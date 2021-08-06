import React from 'react';
import { Dropdown, Grid, Item, Header, Input, Segment } from 'semantic-ui-react';
import ListProjectsCard from './ListProjectsCard';

class ListProjectsWidget extends React.Component {
  render() {
    const sticky = {
      position1: '-webkit-sticky',
      position: 'sticky',
      top: '6.5rem',
    };

    const department = [
      { key: 'ics', value: 'ics', text: 'ICS' },
      { key: 'ce', value: 'ce', text: 'Computer Engineering' },
    ];

    const research = [
      { key: 'ro', value: 'ro', text: 'Robotics' },
      { key: 'ml', value: 'ml', text: ' Machine Learning' },
    ];

    return (
        <div className="listProjects">
          <Grid container doubling relaxed stackable>
            <Grid.Row centered>
              <Header className='listProfileHeader' size={'large'} inverted style={{ paddingTop: '2rem' }}>
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
                         placeholder='Search by name...'
                         fluid
                  />
                  <div style={{ paddingTop: '2rem' }}>
                    <Header>Department:</Header>
                    <Dropdown
                        placeholder='Department'
                        fluid
                        search
                        selection
                        options={department}
                    />
                  </div>
                  <div style={{ paddingTop: '2rem' }}>
                    <Header>Research:</Header>
                    <Dropdown
                        placeholder='Research'
                        fluid
                        search
                        selection
                        options={research}
                    />
                  </div>
                  <div style={{ paddingTop: '2rem' }}>
                    <Header>Faculty Name:</Header>
                    <Input icon='search'
                           iconPosition='left'
                           placeholder='Search by Faculty'
                           fluid
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
