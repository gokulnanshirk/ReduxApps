import React from "react";
import { NavLink, Link } from "react-router-dom";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.data.item.id) {
      return (
        <div className="card list">
          <div className="card-header">
            {this.props.data.item.id} {this.props.data.item.title}
          </div>
          <div className="card-body">
            <h5 className="card-title">{this.props.data.item.title}</h5>
            <p className="card-text">{this.props.data.item.price}</p>
            <p className="card-text">{this.props.data.item.duration}</p>
            <p className="card-text">{this.props.data.item.description}</p>

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
