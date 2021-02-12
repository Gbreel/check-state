import React ,{ Component } from 'react'
import './App.css';
import Profile from'./Profile/Profile';


export default class App extends Component {
  state = {
    show: false
  }
    handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div className="App">
        <button className="btn" onClick={()=>this.handleShow()}> Show</button>
        {this.state.show &&
         <div className="App">
            <Profile FullName="wael yahya" bio="this is me" profession="student" >
      
              <img src="wael.jpg" alt="image"/>
            </Profile>
         </div>
  }
      </div>
    )
  }
}


