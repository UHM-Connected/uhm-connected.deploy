import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import {
  Form,
  Dropdown,
  Grid,
  Container,
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
  { key: 'f', text: 'Freshman', value: 'freshman' },
  { key: 's', text: 'Sophomore', value: 'sophomore' },
  { key: 'j', text: 'Junior', value: 'junior' },
  { key: 'sr', text: 'Senior', value: 'senior' },
];

const titleOptions = [
  { key: 'dr', text: 'Dr.', value: 'Dr. ' },
  { key: 'ms', text: 'Ms.', value: 'Ms. ' },
  { key: 'mrs', text: 'Mrs.', value: 'Mrs. ' },
  { key: 'mr', text: 'Mr.', value: 'Mr. ' },
  { key: 'no', text: 'No Preference', value: 'no' },
];

const padding = { paddingTop: '25px', paddingBottom: '50px', paddingLeft: '100px', paddingRight: '100px' };

class Signup extends React.Component {
  /* Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = { email: '', firstname: '', lastname: '', profilepic: '', bio: '', major: '', standing: '', interests: '', skills: '', education: '', work: '', references: '',
      department: '', password: '', title: '', status: '', recentpublications: '', courses: '', goals: '', error: '', projects: '', role: '', github: '', website: '', linkedin: '', redirectToReferer: false };
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
    const { email, firstname, lastname, profilepic, bio, major, standing, interests, skills, education, work, references, password, title, status, recentpublications, courses, department, goals, projects,
      role, website, linkedin, github } = this.state;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        Users.collection.insert({ firstName: firstname, lastName: lastname, image: profilepic, email, bio, major, classStanding: standing, interests, skills, education, work,
          references, title, status, recentPublications: recentpublications, courses, department, goals, projects, role, website, linkedin, github });
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  form = () => <Container id="signup-page" style={padding}>
    <Form onSubmit={this.submit} size='small' className="facultyForm">
      <Grid centered relaxed container>
        <Grid.Column>
          <Segment raised padded>
            <Form.Select
              fluid
              required
              label="Status"
              id="signup-form-status"
              readOnly
              name="status"
              type="status"
              placeholder="Faculty Member"
              value="Faculty Member"
            />
            <Form.Group widths='equal'><Form.Select
              fluid
              required
              label="Title"
              id="signup-form-title"
              options={titleOptions}
              name="title"
              type="title"
              placeholder="Title"
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              required
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
              fluid
              required
              label="Last Name"
              id="signup-form-lastname"
              icon="user"
              iconPosition="left"
              name="lastname"
              placeholder="Last Name"
              type="lastname"
              onChange={this.handleChange}
            /></Form.Group>
            <Form.Input
              fluid
              required
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
              fluid
              label="Profile Picture"
              id="signup-form-profilepic"
              icon="camera"
              iconPosition="left"
              name="profilepic"
              placeholder="Right-click on an online image and copy the URL. Input that URL here."
              type="profilepic"
              onChange={this.handleChange}/>
            <Form.Input
              label="Github"
              id="signup-form-github"
              name="github"
              placeholder="URL to your Github"
              type="github"
              onChange={this.handleChange}
            />
            <Form.Input
              label="Website"
              id="signup-form-website"
              name="website"
              placeholder="URL to your website"
              type="website"
              onChange={this.handleChange}
            />
            <Form.Input
              label="LinkedIn"
              id="signup-form-linkedin"
              name="linkedIn"
              placeholder="URL to your LinkedIn"
              type="linkedIn"
              onChange={this.handleChange}
            />
            <Form.Input
              required
              label="Department"
              id="signup-form-department"
              name="department"
              placeholder="Department"
              type="department"
              onChange={this.handleChange}
            />
            <Form.Input
              required
              label="Role"
              id="signup-form-role"
              name="role"
              placeholder="Role"
              type="role"
              onChange={this.handleChange}
            />
            <Form.Input
              label="Previous Projects"
              id="signup-form-projects"
              name="projects"
              placeholder="What projects have you worked on?"
              type="projects"
              onChange={this.handleChange}
            />
            <Form.TextArea
              required
              label="Goals"
              id="signup-form-goals"
              name="goals"
              placeholder="What are your goals for using this website?"
              type="goals"
              onChange={this.handleChange}
            />
            <Form.Input
              label="Interests"
              id="signup-form-interests"
              name="interests"
              placeholder="What are your research interests?"
              type="interests"
              onChange={this.handleChange}
            />
            <Form.TextArea
              required
              label="About"
              id="signup-form-bio"
              icon="camera"
              iconPosition="left"
              name="bio"
              placeholder="Tell us more about you. . ."
              type="bio"
              onChange={this.handleChange}
            />
            <Form.Input
              label="Recent Publications"
              id="signup-form-publications"
              name="publications"
              placeholder="Have you published anything recently?"
              type="publications"
              onChange={this.handleChange}
            />
            <Form.Input
              label="Courses"
              id="signup-form-courses"
              name="courses"
              placeholder="What courses are you teaching?"
              type="courses"
              onChange={this.handleChange}
            />
            <Form.Input
              label="Education"
              id="signup-form-education"
              name="education"
              placeholder="Where and what have you studied?"
              type="education"
              onChange={this.handleChange}
            />
            <Form.Input
              required
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
        </Grid.Column>
      </Grid>
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
  </Container>

  render() {
    // styles
    const { from } = this.props.location.state || { from: { pathname: 'user' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }

    const { showForm } = this.state;
    const { value } = this.state;
    return (
      <div className='signup-background'>
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
                  <Form onSubmit={this.submit} size='small' className="studentForm">
                    <Grid centered relaxed container>
                      <Grid.Column>
                        <Segment raised padded>
                          <Form.Select
                            fluid
                            required
                            label="Status"
                            id="signup-form-status"
                            readOnly
                            name="status"
                            type="status"
                            placeholder="Student"
                            value="Faculty Member"
                          />
                          <Form.Group widths='equal'>
                            <Form.Input
                              fluid
                              required
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
                              fluid
                              required
                              label="Last Name"
                              id="signup-form-lastname"
                              icon="user"
                              iconPosition="left"
                              name="lastname"
                              placeholder="Last Name"
                              type="lastname"
                              onChange={this.handleChange}
                            /></Form.Group>
                          <Form.Input
                            fluid
                            required
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
                            fluid
                            label="Profile Picture"
                            id="signup-form-profilepic"
                            icon="camera"
                            iconPosition="left"
                            name="profilepic"
                            placeholder="Right-click on an online image and copy the URL. Input that URL here."
                            type="profilepic"
                            onChange={this.handleChange}/>
                          <Form.Input
                            required
                            label="Major"
                            id="signup-form-major"
                            name="major"
                            placeholder="Major"
                            type="major"
                            onChange={this.handleChange}
                          />
                          <Form.TextArea
                            required
                            label="Goals"
                            id="signup-form-goals"
                            name="goals"
                            placeholder="What are your goals for using this website?"
                            type="goals"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Github"
                            id="signup-form-github"
                            name="github"
                            placeholder="URL to your Github"
                            type="github"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Website"
                            id="signup-form-website"
                            name="website"
                            placeholder="URL to your website"
                            type="website"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="LinkedIn"
                            id="signup-form-linkedin"
                            name="linkedin"
                            placeholder="linkedin"
                            type="linkedin"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Interests"
                            id="signup-form-interests"
                            name="interests"
                            placeholder="What are your research interests?"
                            type="interests"
                            onChange={this.handleChange}
                          />
                          <Form.Select
                            required
                            label="Class Standing"
                            id="signup-form-standing"
                            name="standing"
                            options={standingOptions}
                            placeholder="What year are you in?"
                            type="standing"
                            onChange={this.handleChange}
                          />
                          <Form.TextArea
                            required
                            label="About"
                            id="signup-form-bio"
                            name="bio"
                            placeholder="Tell us more about you . . ."
                            type="bio"
                            onChange={this.handleChange}
                          />
                          <Form.TextArea
                            required
                            label="Relevant Courses"
                            id="signup-form-courses"
                            name="courses"
                            placeholder="What courses have you taken that are relevant to your goals?"
                            type="courses"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            required
                            label="Graduation Date"
                            id="signup-form-education"
                            name="education"
                            placeholder="When will you graduate?"
                            type="education"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            label="Work Experience"
                            id="signup-form-work"
                            name="work"
                            placeholder="Where have you worked before?"
                            type="work"
                            onChange={this.handleChange}
                          />
                          <Form.Input
                            required
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
                      </Grid.Column>
                    </Grid>
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
                </Container>

              ) :
                <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
                  <Grid.Column width={50}>
                    <h1 className='signup-text'>Thank you for your interest in registering!
                      <p>I am a         <Dropdown
                        onChange={this.handleDropdownChange}
                        options={statusOptions}
                        selection
                        button
                        value={value} /></p></h1>
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
