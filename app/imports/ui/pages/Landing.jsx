import React from 'react';
import { Grid, GridRow, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div style={{fontFamily:'Poppins'}}>
        <grid>
          <row>
           <h1 style={{color: "white", fontSize:100, textAlign: 'center', fontFamily:'Poppins' }}>Welcome to UHM Connected</h1>
          </row>
          <row style={{display: 'flex', justifyContent: 'center'}}>
            <a href="/#/user">
              <button style={{backgroundColor: "#b48415", color: "white", fontSize:50, fontFamily:'Poppins'}}>Get Connected</button>
            </a>
          </row>
        </grid> 
      </div>
    );
  }
}

export default Landing;
