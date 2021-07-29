import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Dropdown,
  Grid,
  Container,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';
import { Users } from '../../api/user/User';

const statusOptions = [
  { key: 'm', text: 'Student', value: 'student' },
  { key: 'f', text: 'Faculty Member', value: 'faculty member' },
];

const standingOptions = [
  { key: 'f', text: 'Male', value: 'male' },
  { key: 's', text: 'Female', value: 'female' },
  { key: 'j', text: 'Other', value: 'other' },
  { key: 'j', text: 'Other', value: 'other' },
];

const titleOptions = [
  { key: 'dr', text: 'Dr.', value: 'dr' },
  { key: 'ms', text: 'Ms.', value: 'ms' },
  { key: 'mrs', text: 'Mrs.', value: 'mrs' },
  { key: 'mr', text: 'Mr.', value: 'mr' },
  { key: 'no', text: 'No Preference', value: 'no' },
];

const padding = { paddingTop: '25px', paddingBottom: '50px', paddingLeft: '100px', paddingRight: '100px' };

class Signup extends React.Component {
  /* Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: '', firstname: '', lastname: '', profilepic: '', bio: '', major: '', standing: '', interests: '', skills: '', education: '', work: '', references: '', password: '', error: '', redirectToReferer: false };
  }

  state = { showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  handleDropdownChange = (e, { value }) => this.setState({ value })

  /* Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /* Handle Signup submission. Create user account and a user profile entry, then redirect to the home page. */
  submit = () => {
    const { email, firstname, lastname, profilepic, bio, major, standing, interests, skills, education, work, references, password } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        Users.collection.insert({ firstName: firstname, lastName: lastname, image: profilepic, email, bio, major, classStanding: standing, interests, skills, education, work, references });
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  form = () => {
    const { value } = this.state;
    return <Form style={padding}>
      <Form.Group widths='equal'>
        <Form.Field
          control={Select}
          label='Title'
          options={titleOptions}
        />
        <Form.Field
          control={Input}
          label='First name'
          placeholder='First name'
        />
        <Form.Field
          control={Input}
          label='Last name'
          placeholder='Last name'
        />
      </Form.Group>
      <Form.Group inline>
        <label>Quantity</label>
        <Form.Field
          control={Radio}
          label='One'
          value='1'
          checked={value === '1'}
          onChange={this.handleChange}
        />
        <Form.Field
          control={Radio}
          label='Two'
          value='2'
          checked={value === '2'}
          onChange={this.handleChange}
        />
        <Form.Field
          control={Radio}
          label='Three'
          value='3'
          checked={value === '3'}
          onChange={this.handleChange}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label='About'
        placeholder='Tell us more about you...'
      />
      <Form.Field
        control={Checkbox}
        label='I agree to the Terms and Conditions'
      />
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>;
  }

  render() {
    // styles
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }

    const { showForm } = this.state;
    const { value } = this.state;
    return (
      <div>
        {/* eslint-disable-next-line no-nested-ternary */}
        { showForm ? (
          <div>

            <Form>{this.form()}</Form>
          </div>
        )
          : (
        // eslint-disable-next-line no-nested-ternary
            (this.state.value === 'faculty member') ? (
              this.toggleForm()
            ) : (
              (this.state.value === 'student') ? (
                <Container id="signup-page" style={padding}>
                  <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
                    <Grid.Column>
                      <Header as="h2" textAlign="center">
                              Register your account
                      </Header>
                      <Form onSubmit={this.submit}>
                        <Segment stacked>
                          <Form.Input
                            label="Email"
                            id="signup-form-email"
                            icon="envelope"
                            iconPosition="left"
                            name="email"
                            type="email"
                            placeholder="E-mail address"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="First Name"
                            id="signup-form-firstname"
                            icon="user"
                            iconPosition="left"
                            name="firstname"
                            placeholder="First Name"
                            type="firstname"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Last Name"
                            id="signup-form-lastname"
                            icon="user"
                            iconPosition="left"
                            name="lastname"
                            placeholder="Last Name"
                            type="lastname"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Profile Picture"
                            id="signup-form-profilepic"
                            icon="camera"
                            iconPosition="left"
                            name="profilepic"
                            placeholder="Profile Picture"
                            type="profilepic"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Major"
                            id="signup-form-major"
                            icon="camera"
                            iconPosition="left"
                            name="major"
                            placeholder="Major or Department"
                            type="major"
                            onChange={this.handleChange}
                          />
                          <Form.Select
                            label="Class Standing"
                            id="signup-form-standing"
                            icon="camera"
                            iconPosition="left"
                            name="standing"
                            options={standingOptions}
                            placeholder="What year are you in?"
                            type="standing"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Interests"
                            id="signup-form-interests"
                            icon="camera"
                            iconPosition="left"
                            name="interests"
                            placeholder="What are you interested in?"
                            type="interests"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Skills"
                            id="signup-form-skills"
                            icon="camera"
                            iconPosition="left"
                            name="skills"
                            placeholder="What are your areas of expertise?"
                            type="skills"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Bio"
                            id="signup-form-bio"
                            icon="comment"
                            iconPosition="left"
                            name="bio"
                            placeholder="Tell us a little bit about yourself (favorite movies, genres, etc.)"
                            type="bio"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Education"
                            id="signup-form-education"
                            icon="camera"
                            iconPosition="left"
                            name="education"
                            placeholder="Where and what have you studied?"
                            type="education"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Work"
                            id="signup-form-work"
                            icon="camera"
                            iconPosition="left"
                            name="work"
                            placeholder="Work Experience"
                            type="Work"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="References"
                            id="signup-form-references"
                            icon="camera"
                            iconPosition="left"
                            name="references"
                            placeholder="References"
                            type="references"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Password"
                            id="signup-form-password"
                            icon="lock"
                            iconPosition="left"
                            name="password"
                            placeholder="Password"
                            type="password"
                            onChange={this.handleChange}
                          />
                          <Form.Button id="signup-form-submit" content="Submit"/>
                        </Segment>
                      </Form>
                      <Message>
                              Already have an account? Login <Link to="/signin">here</Link>
                      </Message>
                      {this.state.error === '' ? (
                        ''
                      ) : (
                        <Message
                          error
                          header="Registration was not successful"
                          content={this.state.error}
                        />
                      )}
                    </Grid.Column>
                  </Grid>
                </Container>

              ) :
                <Grid verticalAlign='middle' textAlign='center' container>
                  <Grid.Column>
                    <h1>Thank you for your interest in registering!</h1>
                    <h1>I am a         <Dropdown
                      onChange={this.handleDropdownChange}
                      options={statusOptions}
                      selection
                      button
                      value={value} /></h1>
                  </Grid.Column>
                </Grid>
            )
          )
        }
      </div>
    );
  }

}

/* Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
