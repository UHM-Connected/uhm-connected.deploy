import React from 'react';
import { Divider, Form, Grid, Segment, Header, Message, Select } from 'semantic-ui-react';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Projects } from '../../api/project/Project';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  projectName: String,
  faculty: String,
  department: String,
  goal: String,
  studentRequirements: String,
  description: String,
  researchArea: Array,
  'researchArea.$': String,
  email: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

const options = [
  { key: 'a', text: 'Algorithms', value: 'algorithms' },
  { key: 'm', text: 'Machine Learning', value: 'machine' },
];

class CreateNewProject extends React.Component {
  state = { }

  /* Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  submit = () => {
    const { projectName, faculty, department, goal, studentRequirements, description, researchArea, email } = this.state;
    Projects.collection.insert({ projectName, faculty, department, goal, studentRequirements, description, researchArea, email },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
          this.setState({ error: error.reason });
        } else {
          swal('Success', 'Project added successfully', 'success');
          this.setState({ projectName: '', faculty: '', department: '', goal: '', studentRequirements: '', description: '', researchArea: '', email: '' });
        }
      });
  }

  render() {
    return (
      <Grid container centered>
        <Grid.Column>
          <Divider hidden/>
          <Segment inverted className='projectForm' very padded>
            <Header as='h3' textAlign='center'>Create New Project</Header>
            <Form schema={bridge} onSubmit={this.submit}>
              <Form.Group unstackable widths={3}>
                <Form.Input required label='Name of Project' placeholder='Name of Project' name='projectName' type='projectName' onChange={this.handleChange} />
                <Form.Input required label='Name of Faculty' placeholder='Name of Faculty' name='faculty' type='faculty' onChange={this.handleChange} />
                <Form.Input required label='Department' placeholder='Department' name='department' type='department' onChange={this.handleChange} />
              </Form.Group>
              <Form.Group unstackable widths={2}>
                <Form.TextArea required label='Goal for the Project' placeholder='What is the goal for the project...' name='goal' type="goal" onChange={this.handleChange} />
                <Form.TextArea required label='Student Requirements' placeholder='What is required from the student...' name='studentRequirements' type='studentRequirements' onChange={this.handleChange} />
              </Form.Group>
              <Grid.Row>
                <Form.TextArea required label='Project Description' placeholder='Tell us more about the project...' name='description' type='description' onChange={this.handleChange} />
              </Grid.Row>
              <Form.Group unstackable widths={2}>
                <Form.Field
                  control={Select}
                  search
                  label='Research Area'
                  options={options}
                  placeholder='Research Area'
                  name='researchArea'
                  type='researchArea'
                  onChange={this.handleChange}
                />
                <Form.Input required label='Email' placeholder='Email Address' name='email' type='email' onChange={this.handleChange} />
              </Form.Group>
              <Grid>
                <Grid.Column textAlign="center">
                  <Message
                    success
                    header='Form Completed'
                    content="New Project Created"
                  />
                  <Form.Button content='Submit'/>
                </Grid.Column>
              </Grid>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>

    );
  }
}
export default CreateNewProject;
