import React, {Component} from 'react'
import From from "../component/From"
class Table extends Component {
  // 生命周期
  // componentDidMount(){
  //   // 挂载后执行请求数据
  //   console.log(34345)
  //   const url ='https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
  //   fetch(url).then(result=>{
  //     result.json()
  //   }).then(result=>{
  //     console.log(result,888)
  //   })
  // }
  // 放在state
  state = {
    characters :[
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }
  // 删除
  removeCharacter = (index) => {
    console.log(22)
    const {characters} = this.state
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  // 更改数据
  handleSubmit=(character)=>{
    this.setState({
      characters:[...this.state.characters,character]
    })
  }
  render() {
    const {characters} = this.state
    return (
      <div>
        <From handleSubmit={this.handleSubmit}/>
          <table>
        <TableHeader />
        <TableBody  characterData={characters} removeCharacter={this.removeCharacter}/>
      </table>
      </div>
    
    )
  }
}
const TableHeader = ()=>{

  return (
    <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>
  </thead>

  )
}
const TableBody = (props)=>{
  const rows = props.characterData.map((item,index)=>{
    return (
      <tr key={index}>
      <td>{item.name}</td>
      <td>{item.job}</td>
      <td>
    <button onClick={() => props.removeCharacter(index)}>Delete</button>
  </td>
    </tr>
    )
  })
  return (
    <tbody>
      {rows}
    </tbody>
  )
}
export default Table