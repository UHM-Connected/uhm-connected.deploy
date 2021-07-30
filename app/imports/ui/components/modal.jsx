import React from 'react';
import { Button, Header, Image, Modal, Grid, Icon, Divider, List } from 'semantic-ui-react';

function ProfileModal() {

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

export default ProfileModal;
