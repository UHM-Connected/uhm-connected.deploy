import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Dropdown, Grid, Header, Input, Item, Loader, Segment } from 'semantic-ui-react';
import { Projects } from '../../api/project/Project';
import ListProjectsCard from '../components/ListProjectsCard';

class ListProjects extends React.Component {
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting users</Loader>;
  }

  renderPage() {
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
              {this.props.projects.map((project, index) => <ListProjectsCard key={index} project={project}/>)}
            </Item.Group>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

ListProjects.propTypes = {
  projects: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

export default withTracker(() => {
  const subscription = Meteor.subscribe(Projects.listPublicationName);
  const ready = subscription.ready();
  const projects = Projects.collection.find({}).fetch();
  return {
    projects,
    ready,
  };
})(ListProjects);
