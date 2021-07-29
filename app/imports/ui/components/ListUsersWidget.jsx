import React from 'react';
import { Dropdown, Grid, GridColumn, Header, Input, Segment } from 'semantic-ui-react';
import ListUsersCard from './ListUsersCard';

const sticky = {
  position1: '-webkit-sticky',
  position: 'sticky',
  top: '6.5rem',
};

const userOptions = [
  {
    key: 'Student',
    text: 'Student',
    value: 'Student',
  },
  {
    key: 'Faculty',
    text: 'Faculty',
    value: 'Faculty',
  },
];

const interestsOptions = [
  {
    key: 'Machine Learning',
    text: 'Machine Learning',
    value: 'Machine Learning',
  },
  {
    key: 'Robotics',
    text: 'Robotics',
    value: 'Robotics',
  },
];

const departmentOptions = [
  {
    key: 'Computer Engineering',
    text: 'Computer Engineering',
    value: 'Computer Engineering',
  },
  {
    key: 'Computer Science',
    text: 'Computer Science',
    value: 'Computer Science',
  },
];

const ListUsersWidget = () => (
  <div className="listUsers">
    <Grid container doubling relaxed stackable>
      <Grid.Row centered>
        <Header className='listProfileHeader' size={'large'} inverted style={{ paddingTop: '2rem' }}>
        All Profiles
        </Header>
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
              <Header>Department</Header>
              <Dropdown
                placeholder='Department'
                fluid
                selection
                search
                options={departmentOptions}
              />
            </div>
            <div style={{ paddingTop: '2rem' }}>
              <Header>Users</Header>
              <Dropdown
                placeholder='Student/Faculty'
                fluid
                selection
                options={userOptions}
              />
            </div>
            <div style={{ paddingTop: '2rem' }}>
              <Header>Interests</Header>
              <Dropdown
                placeholder='Interests'
                fluid
                selection
                search
                options={interestsOptions}
              />
            </div>
          </div>
        </Segment>
      </Grid.Column>
      <GridColumn width={12}>
        <ListUsersCard/>
      </GridColumn>
    </Grid>
  </div>
);
export default ListUsersWidget;
