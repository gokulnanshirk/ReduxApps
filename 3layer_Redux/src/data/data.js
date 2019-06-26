import axios from "axios";
import React from "react";
let status = 2;
let data = {
  categories: [
    axios
  .get(
    `http://vivartha.com.md-96.webhostbox.net/vivartha.com/ionic/codeignitor/index.php/model_controller/api_get_3layer/${status}/category`
  )
  .then(res => data.categories=res.data
     )
  ],
  listItems: [
    axios
    .get(
      `http://vivartha.com.md-96.webhostbox.net/vivartha.com/ionic/codeignitor/index.php/model_controller/api_get_3layer/${status}/list_items`
    )
    .then(res =>data.listItems=res.data)
  ],
  list:[],
  item:[]
};



     
  

export default data;
