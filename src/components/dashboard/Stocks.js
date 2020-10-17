import Axios from 'axios'
import React, { Component } from 'react'
import axios from 'axios'
export class Stocks extends Component {
  constructor(){
    super()
    this.state={
      stocks:[{name:'L&T'},{name:'Infoysys'}]
    }
  }
  componentDidMount(){
  axios.get('http://localhost:5001/stocker-8a30b/asia-south1/stocker/user/dashboard')
  .then(res=>{
    console.log(res.data)
  })
  }
  render() {
    return (
      <React.Fragment>
       {this.state.stocks.map(stock=>(
         <div className="row">
         <div className="col s12 m7">
           <div className="card">
             <div className="card-image waves-effect waves-block waves-light">
               {/* Graph goes here */}
               <img className="activator" src="images/office.jpg" alt="graph laga"/>
             </div>
             <div className="card-content">
               {/* Stock price goes here */}
               <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                <p><a href="#!">{stock.name}</a></p>
             </div>
             <div className="card-reveal">
             <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
             {/* Card Name and any other info */}
             </div>
           </div>
         </div>
       </div>))}
      </React.Fragment>
    )
  }
}

export default Stocks
