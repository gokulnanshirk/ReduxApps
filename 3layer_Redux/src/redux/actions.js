export function showList(data) {
  return {
    type: "Show_List",
    data
  };
}
export function showItem(data) {
  return {
    type: "Show_Item",
    data
  };
}
export function AddToCart(data){
    return {
        type: "Add_To_Cart",
        data
      };
}
