import React, { Component } from 'react'
import Stocks from './Stocks';

export class SideNav extends Component {
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      const M=window.M
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });
  }
  render() {
    return (
      <React.Fragment>
<ul id="slide-out" className="sidenav">
  <li>
    <div className="user-view">
    <div className="background">
      <img src="images/office.jpg" alt="Profile Pic"/>
    </div>
      <a href="#user">User</a>
      <a href="#name"><span class="white-text name">Name</span></a>
    </div>
    </li>
       <li><a href="#!">User Profile</a></li>
       <li><a className="waves-effect" href="#!">Stocks</a></li>
       <li><a className="waves-effect" href="#!">Notifications</a></li>
       <li><a className="waves-effect" href="#!">Add Stocks</a></li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <Stocks/>
      </React.Fragment>
    )
  }
}

export default SideNav
