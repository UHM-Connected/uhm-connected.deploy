import React from 'react';
import { Button } from 'semantic-ui-react';

function ModalProject() {

  const [setOpen] = React.useState(false);

  return (
    <Button className='lmButton'
      compact floated='right'
      content="Connect"
      labelPosition='right'
      icon='checkmark'
      onClick={() => setOpen(false)}
      positive
    />
  );
}

export default ModalProject;
