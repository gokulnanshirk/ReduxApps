import data from "../data/data";
import Category from "../components/home/category";
import Item from "../components/home/item";
import List from "../components/home/list";
import Cart from "../components/cart/cart";
import { connect } from 'react-redux';
import {showList} from "../redux/actions";
import { bindActionCreators } from "redux";


function mapStateToProps(data) {
    console.log("data in wrapper",data);
    console.log(data);
  return {content:data};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({showList},dispatch)
}

export const WrapperCategory=connect(mapStateToProps,mapDispatchToProps)(Category)
export const WrapperList=connect(mapStateToProps)(List)
export const WrapperItem=connect(mapStateToProps)(Item)

