import React from 'react';
import './header.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons';


class Header extends React.Component {
    render(){
      return (
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand" href="index.html">QuizMaster</a>
        </nav>
      )
    }
  }

export default Header;