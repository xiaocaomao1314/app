import { Component } from "react";
 class From extends Component{
  initState = {
    name:"",
    job:""
  }
  // 初始化和state赋值后相互不影响
  state = this.initState
  render(){
    const {name,job} = this.state
    return (
      <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={this.handleChange} />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        id="job"
        value={job}
        onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
    </form>
    )
  }
  submitForm = () =>{
    this.props.handleSubmit(this.state)
    this.setState(this.initState)
  }
  handleChange = (event)=>{
    console.log(event,99999)
    const {name,value} = event.target
    this.setState({
      [name]:value
    })
  }
}
export default From