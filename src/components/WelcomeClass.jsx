import React, {Component} from "react"
class WelcomeClass extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return <h1>Meet the {this.props.name}</h1>
  }
}

export default WelcomeClass;