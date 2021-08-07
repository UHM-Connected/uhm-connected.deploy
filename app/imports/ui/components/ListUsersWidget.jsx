import React from 'react';
import { Dropdown, Grid, Item, Header, Input, Segment, Divider } from 'semantic-ui-react';
import ListUsersCard from './ListUsersCard';

class ListUsersWidget extends React.Component {
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

    const interests = [
      { key: 'ro', value: 'ro', text: 'Robotics' },
      { key: 'ml', value: 'ml', text: ' Machine Learning' },
    ];

    return (
      <div className="listUsers">
        <Grid container doubling relaxed stackable>
          <Grid.Row centered>
            <Header className='listProfileHeader' size={'large'} inverted style={{ paddingTop: '2rem' }}>
                All Profiles
            </Header>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <Divider horizontal>
                <Header as='h1' textAlign='right' inverted>Student</Header>
              </Divider>
            </Grid.Column>
            <Grid.Column width={8}>
              <Divider horizontal>
                <Header as='h1' textAlign='left' inverted>Faculty</Header>
              </Divider>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width={4}>

            <Segment className='filter' style={sticky}>
              <div style={{ paddingTop: '2rem' }}>
                <Header>
                  <Header.Content>
                      Total Users:
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
                  <Header>Interests:</Header>
                  <Dropdown
                    placeholder='Interests'
                    fluid
                    search
                    selection
                    options={interests}
                  />
                </div>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            <Item.Group divided>
              <ListUsersCard/>
            </Item.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default ListUsersWidget;
