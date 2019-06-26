import React from "react";
import "../../index.css";

export default class Category extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      categories:[]
    }
    console.log("constructor in categor js, data:",this.props.content.categories)
  }
  componentDidMount(){
    this.setState({
      categories:this.props.content.categoies
    })
    console.log('inside the componentDidMount of categories',this.state);    
  }
  render() {
    console.log('inside the render method');
    console.log(this.state.categories);
    return (
      <div>
        <ul className="list-group list">

          <li>Test{
            /* {this.props.content.categories.map(cat => (
            <li
              onClick={() => {
                this.props.showList(cat);
              }}
              key={cat.id}
              className="list-group-item zoomdetail"
            >
              {cat.name}
            </li>
          ))} */}</li>
        </ul>
      </div>
    );
  }
}
