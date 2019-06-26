import React from "react";
import "../../index.css";

export default class Category extends React.Component {

  componentWillMount() {
    let data = () => {
      console.log("category inside will mount",this.props.content)
      setTimeout(() => {
        this.setState({});
      }, 800);
    };
    data();
  }
  render() {
    console.log("render",this.props.content)
    return (
      <div>
        <ul className="list-group list">
          {this.props.content.categories.map(cat => (
            <li
              key={cat.id}
              onClick={() => this.props.showList(cat)}
              className="list-group-item zoomdetail"
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
