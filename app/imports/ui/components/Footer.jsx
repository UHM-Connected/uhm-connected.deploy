import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px', color: 'whitesmoke', font: 'Poppins' };
    return (
      <footer>
        <div style={divStyle} className="ui center aligned container">
          <hr />
              UH-Connected <br />
              University of Hawaii<br />
              ICS 464 <br />
          <a href="https://github.com/UHM-Connected/uhm-connected.deploy">GitHub Repo</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
