import Axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './form.css'

class SignUp extends React.Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      mobile:'',
      password:'',
      confirmPassword:''
    }
  }

  handleSubmit=e=>{
    e.preventDefault()
    console.log(this.state)
    // this.setState({
    //   name:'',
    //   email:'',
    //   mobile:'',
    //   password:'',
    //   confirmPassword:''
    // })
    const userData={
      name:this.state.name,
      email:this.state.email,
      mobile:this.state.mobile,
      password:this.state.password,
      confirmPassword:this.state.confirmPassword
    }
    axios.post('/signup',userData)
    .then(res=>{
      console.log(res.data)
    })
  }

  handleChange=e=>{
    const {name,value}=e.target
  this.setState({
   [name]:value
  })
  }
  render(){
    return (
      <React.Fragment>
        <form className="sign-up-form" onSubmit={this.handleSubmit} action="/signup" method="POST">
              <h2 className="tit">Sign up</h2>
              <div className="in-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Name" name="name" 
                onChange={this.handleChange} value={this.state.name}/>
              </div>
              <div className="in-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" name="email" 
                onChange={this.handleChange} value={this.state.email}/>
              </div>
              <div className="in-field">
                <i className="fa fa-phone-square"></i>
                <input type="text" placeholder="Mobile Number" name="mobile" 
                onChange={this.handleChange} value={this.state.mobile}/>
              </div>
              <div className="in-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" name="password" 
                onChange={this.handleChange} value={this.state.password}/>
              </div>
              <div className="in-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm Password" name="confirmPassword" 
                onChange={this.handleChange} value={this.state.confirmPassword}/>
              </div>
              <input type="submit" className="buton" value="Sign up" />
              {/* <p className="social-text">Or Sign up with Google</p>
              <div className="social-media">
                <a href="#!" className="social-icon">
                  <i className="fas fa-google"></i>
                </a>
              </div> */}
            </form>
            <Link to="/"><button className="buton">Go Back</button></Link>
      </React.Fragment>
    )
  }
  }

export default SignUp