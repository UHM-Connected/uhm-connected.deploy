import React from 'react';
import { Grid, Image, Header, List, Icon } from 'semantic-ui-react';

// Image citation: https://www.hawaii.edu/news/2020/09/11/provost-message-planning-for-post-pandemic/
// Logo citation: https://www6.pbrc.hawaii.edu/logos/
/** A simple static component to render some text for the landing page. */
class About extends React.Component {
  render() {
    return (
      <div className="aboutUs">
        <Header as='h1' inverted size='huge' textAlign="center" className="aboutUs-header">ABOUT</Header>
        <Grid container centered stackable verticalAlign="middle" columns='equal' className="aboutUs-background">
          <Grid.Row width={8}>
          </Grid.Row>
          <Grid.Row>
            <Image src="https://www6.pbrc.hawaii.edu/logos/manoaseal_transparent.png" size='medium' centered spaced/>
          </Grid.Row>
          <Grid.Row>
            <Header as='h1' block className="aboutUs-center-text">Sharing career opportunities with our UH &apos;Ohana.</Header>
          </Grid.Row>
        </Grid>

        <Grid container stackable columns={1} verticalAligned="middle">
          <Grid.Row>
            <Grid.Column>
              <div className="aboutUs-background-body">
                <Header as='h2' inverted>Our Mission <Icon color='white' name='star' size='huge' floated='right'/></Header>
                <Header as='h3' size="medium" className="aboutUs-mission-header">
                  The spirit of &apos;Aloha and the bonds of &apos;Ohana are at its strongest when people connect together, willing to help
                  each other out.
                </Header>
                <p className="aboutUs-text">
                  Those ideals are the drive for us to develop this application.  As members of the UH: Manoa &apos;Ohana, there are
                  people out there to help you reach your goals.
                  However, finding these people can sometimes be a bit of a challenge, especially with the dynamic changes occurring
                  within our education systems.  Opportunities are everywhere, but they can be scattered all over the place.
                  Making connections shouldn&apos;t be a stressful scavenger hunt, but rather finding contacts should be easy and straight forward
                  in order to spread &apos;Aloha and form relationships.  Within the UH community, we should consider
                  members of our &apos;Ohana, yet at the same time, being part of the contributors to the world, we should also consider the networks that we form.
                  Hence, why not have a one-stop shop that aims of achieving both through seamless connections?
                </p>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header as='h2' inverted size='huge' textAlign="center" className="aboutUs-header">How to Get Connected</Header>
        <Grid container row={1} verticalAlign="middle">
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="aboutUs-background-body2">
                <Header as='h2' inverted>Students - What Can You Do?<Icon color='white' name='student' size='huge' floated='right'/></Header>
                <List as='ul' className="aboutUs-list">
                  <List.Item as='li'><b>Share your contact information</b>- Allow other users to reach out to you by sharing your email, website, and GitHub profile.</List.Item>
                  <List.Item as='li'><b>Share your experiences</b>- Create a profile and share your resume and projects.</List.Item>
                  <List.Item as='li'><b>Find mentors</b>- Search for faculty users and reach out to their contact info who can help fulfill your graduation experiences.</List.Item>
                  <List.Item as='li'><b>Expand your project portfolio</b>- Find other users and reach out to their contact info to work together in order to develop new projects.</List.Item>
                </List>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="aboutUs-background-body2">
                <Header as='h2' inverted padded>Faculty - What Can You Do?<Icon color='white' name='file' size='huge' floated='right'/></Header>
                <List as='ul' className="aboutUs-list">
                  <List.Item as='li'><b>Share your contacts information</b>- Allow other users to reach out to you by sharing your email, website, and GitHub profile.</List.Item>
                  <List.Item as='li'><b>Promote your research projects</b>- Create project listings for other users to see.</List.Item>
                  <List.Item as='li'><b>Become a mentor</b>- Explore user profiles and contact students in need of help or allow them to reach out to you.</List.Item>
                  <List.Item as='li'><b>Collaborate with others</b>- Reach out to other users of other research areas to propose new research ideas.</List.Item>
                </List>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    );
  }
}

export default About;
