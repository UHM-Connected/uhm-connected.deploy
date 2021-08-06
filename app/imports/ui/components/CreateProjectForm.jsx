import React from 'react';
import { Divider, Form, Grid, Segment, Header, Message, Select } from 'semantic-ui-react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
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

  submit(data, formRef) {
    const { projectName, faculty, department, goal, studentRequirements, description, researchArea, email } = data;
    const owner = Meteor.user().username;
    Projects.collection.insert({ projectName, faculty, department, goal, studentRequirements, description, researchArea, email, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  render() {
    let fRef = null;
    return (
      <Grid container centered>
        <Grid.Column>
          <Divider hidden/>
          <Segment inverted className='projectForm' very padded>
            <Header as='h3' textAlign='center'>Create New Project</Header>
            <Form success ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => this.submit(data, fRef)}>
              <Form.Group unstackable widths={3}>
                <Form.Input required label='Name of Project' placeholder='Name of Project' name='projectName' />
                <Form.Input required label='Name of Faculty' placeholder='Name of Faculty' name='faculty' />
                <Form.Input required label='Department' placeholder='Department' />
              </Form.Group>
              <Form.Group unstackable widths={2}>
                <Form.TextArea required label='Goal for the Project' placeholder='What is the goals for the project...' name='goals' />
                <Form.TextArea required label='Student Requirements' placeholder='What is required from the student...' name='studentRequirements' />
              </Form.Group>
              <Grid.Row>
                <Form.TextArea required label='Project Description' placeholder='Tell us more about the project...' name='description' />
              </Grid.Row>
              <Form.Group unstackable widths={2}>
                <Form.Field
                  control={Select}
                  search
                  label='Research Area'
                  options={options}
                  placeholder='Research Area'
                  name='researchArea'
                />
                <Form.Input required label='Email' placeholder='Email Address' name='email' />
              </Form.Group>
              <Grid>
                <Grid.Column textAlign="center">
                  <Message
                    success
                    header='Form Completed'
                    content="New Project Created"
                  />
                  <Form.Button Content='Submit'/>
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
