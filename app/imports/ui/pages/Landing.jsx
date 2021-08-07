import React from 'react';
import { Grid, GridRow, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {

    

    return (
      <div style={{fontFamily:'Poppins'}}>
        <grid>
          
          <div class="loading">
            <Image src="https://manoa.hawaii.edu/wp/wp-content/uploads/2018/04/manoa-lowercampus-hero-1024x576.jpg" centered size='fitted'
            
            ></Image>
          <div class="textblock">
           <h1 style={{color: "white",fontSize:50, fontFamily:'Poppins' }} >Welcome to UHM Connected</h1>
           </div>
          </div>
          <row style={{display: 'flex', justifyContent: 'center'}}>
            
          
            <a href="/#/listusers">
             <button style={{backgroundColor: "#b48415", color: "white", fontSize:50, fontFamily:'Poppins'}}>Get Connected</button>
            </a>
          
          </row>
          <row style={{display: 'flex', justifyContent: 'center'}}>
            <p style={{color: "white", textAlign: 'center', fontFamily:'Poppins', border:'3px solid #b48415', width: '50%', display:'center' }}>
              Our goal is to help students connect with faculty to find opportunities to engage in research, hands-on experiences, and suitable internships, 
              while helping faculty find students who are interested in participating in projects.</p>
          

          </row>
        </grid> 

         
      </div>
    );
  }
}





export default Landing;
