import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutUs">
        <Grid container centered stackable verticalAlign="middle" columns='equal'>
          <Grid.Row width={8}>
            <Header as='h1' inverted>ABOUT US</Header>
          </Grid.Row>
          <div className="aboutUs-background">
            <Grid.Row>
              <Image src="https://www6.pbrc.hawaii.edu/logos/manoaseal_transparent.png" size='medium' centered/>
            </Grid.Row>
            <Grid.Row>
              <Header as='h1' inverted>Sharing career opportunities with our UH &apos;Ohana.</Header>
            </Grid.Row>
          </div>
        </Grid>

        <Grid container columns={1} verticalAligned="middle">
          <Grid.Row>
            <Grid.Column className="aboutUs-background-body">
              <Image src="https://www6.pbrc.hawaii.edu/logos/manoaseal_transparent.png" size='small' floated='right'/>
              <Header as='h2' inverted>Our Mission</Header>
              <p>This is our mission.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid container row={1} verticalAlign="middle">
          <Grid.Row columns={2} padded>
            <Grid.Column className="aboutUs-background-body">
              <Image src="https://www6.pbrc.hawaii.edu/logos/manoaseal_transparent.png" size='small' floated='right'/>
              <Header as='h2' inverted>Student</Header>
              <p>This will be details about the students.</p>
            </Grid.Column>
            <Grid.Column className="aboutUs-background-body">
              <Image src="https://www6.pbrc.hawaii.edu/logos/manoaseal_transparent.png" size='small' floated='right'/>
              <Header as='h2' inverted>Faculty</Header>
              <p>This will be details about the faculty.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default AboutUs;
