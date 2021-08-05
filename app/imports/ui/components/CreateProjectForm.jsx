import React from 'react';
import { Button, Divider, Form, Grid, Segment, Header, Message, Select } from 'semantic-ui-react';

const options = [
  { key: 'a', text: 'Algorithms', value: 'algorithms' },
  { key: 'm', text: 'Machine Learning', value: 'machine' },
];

class CreateNewProject extends React.Component {
  render() {
    return (
      <Grid container centered>
        <Grid.Column>
          <Divider hidden/>
          <Segment inverted className='projectForm' very padded>
            <Header as='h3' textAlign='center'>Create New Project</Header>
            <Form success>
              <Form.Group unstackable widths={3}>
                <Form.Input required label='Name of Project' placeholder='Name of Project' />
                <Form.Input required label='Name of Faculty' placeholder='Name of Faculty' />
                <Form.Input required label='Department' placeholder='Department' />
              </Form.Group>
              <Form.Group unstackable widths={2}>
                <Form.TextArea required label='Goal for the Project' placeholder='What is the goals for the project...' />
                <Form.TextArea required label='Student Requirements' placeholder='What is required from the student...' />
              </Form.Group>
              <Grid.Row>
                <Form.TextArea required label='Project Description' placeholder='Tell us more about the project...' />
              </Grid.Row>
              <Form.Group unstackable widths={2}>
                <Form.Field
                  control={Select}
                  search
                  label='Research Area'
                  options={options}
                  placeholder='Research Area'
                />
                <Form.Input required label='Email' placeholder='Email Address' />
              </Form.Group>
              <Grid>
                <Grid.Column textAlign="center">
                  <Message
                    success
                    header='Form Completed'
                    content="New Project Created"
                  />
                  <Button type='submit'>Create</Button>
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
