import data from "../data/data"; 

let rootReducer = function(currentState = data, action) {
  console.log("action is :", action, "current state is :", currentState);
switch(action.type){
    case "Show_List" :return showList(action.data,currentState)
}
  return currentState;
};

let showList = function(data,state) {
    console.log("ShowList in reducer",data);
    state.categories.map(scategory => {
        if (data.id === scategory.id){
         return   state.list=state.listItems.filter(
                item => item.category_id === scategory.id
              );
        }
    })
    let newState=state;
    console.log("new state in showlist",newState)
    return newState
}

let showItem=function (data,state) {
    return state
}
let addToCart=function (data,state) {}

export default rootReducer;

