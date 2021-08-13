import React from 'react';
import { Item, Grid, Divider, Header, Image, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import ProfileModalStudent from './modal';
import ProfileModalFaculty from './modal2';

class ListUsersCard extends React.Component {

  modalType = (userRole) => {
    if (userRole.status === 'Student') {
      return <ProfileModalStudent user={this.props.user}/>;
    }
    return <ProfileModalFaculty user={this.props.user}/>;
  }

  listInterests = () => this.props.user.interests.map(interests => <Label size='tiny' key={interests}> {interests} </Label>)

  render() {
    /* const [open, setOpen] = React.useState(false); */
    return (

      <Item style={{ padding: '0rem 1.5rem 0.5rem 1.5rem' }}>
        <Grid.Column>
          <Item.Content>
            <Item.Header>
              <Header as={'name'} inverted style={{ paddingTop: '1.5 rem' }}>
                <Image size='huge' circular src={this.props.user.image}/>
                {this.props.user.firstName} {this.props.user.lastName}
              </Header>
            </Item.Header>
            <Item.Description>
              <Grid.Column>
                <bio>
                  <Header sub as={'h4'} style={{ paddingTop: '0.5rem ' }} inverted>
                    About Me
                  </Header>
                  {this.modalType(this.props.user)}
                  <span>{this.props.user.bio}</span>
                </bio>
              </Grid.Column>
              <Divider hidden>
                {this.listInterests()}
              </Divider>
            </Item.Description>
          </Item.Content>
          <Divider hidden/>
          <Divider hidden/>
        </Grid.Column>
      </Item>
    );
  }
}

ListUsersCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default withRouter(ListUsersCard);
