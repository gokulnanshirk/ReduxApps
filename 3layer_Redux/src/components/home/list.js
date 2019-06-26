import React from "react";

export default class List extends React.Component {
  constructor(props){
    super(props)
    console.log("props in List constructor",this.props.data)
  }
  render() {
    return (
      <div >
        <ul className="list-group list">
          {this.props.data.listItem.map(item => (
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
