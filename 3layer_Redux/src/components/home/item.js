import React from "react";
import { NavLink, Link } from "react-router-dom";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    setTimeout(()=>{
      console.log("item js timeout")
      this.setState()
    },600)
  }
  
  render() {
    if (this.props.content.item.id) {
      return (
        <div className="card list">
          <div className="card-header">
            {this.props.content.item.id} {this.props.content.item.title}
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.props.content.item.title}</h5>
            <p className="card-text">{this.props.content.item.price}</p>
            <p className="card-text">{this.props.content.item.duration}</p>
            <p className="card-text">{this.props.content.item.description}</p>

            <button className="btn btn-primary" onClick={()=>{this.props.addToCart(this.props.data.item)}}>
              Add To Cart
            </button>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
