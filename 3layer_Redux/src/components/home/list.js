import React from "react";

export default class List extends React.Component {
  constructor(props){
    super(props)
    console.log("props in List constructor",this.props.data)
  }
  componentDidMount(){
    setTimeout(()=>{
    console.log("list ja timeout")
    this.setState({

    });      
    },1000)
  }
  render() {
    return (
      <div >
        <ul className="list-group list">
          {this.props.content.listItems.map(item => (
            <li
              onClick={() => {
                this.props.click(item);
              }}
              key={item.id}
              className="list-group-item zoomdetail"
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
