import MenuItem from "./MenuItem";
import React from "react";

const menuProps=[
    {hvr:" hvr-grow-shadow ",
    food:" food ",
    mediumview:" col-md-6 ",
    largeview :" col-lg-4 ",
    fooditem:" food-item ",
    foodlink:"https://images.unsplash.com/photo-1527324688151-0e627063f2b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    foodname:"Juciy Chicken!"

                },{}]



function MenuRender(){
    return(
        <div className="container items">
        <div className="row">
        {menuProps.map((props,index)=>{
            <MenuItem key={index} hvr={props.hvr} food={props.food} 
             mediumview={props.mediumview} largeview={props.largeview}
             fooditem={props.fooditem} foodlink={props.foodlink} 
             foodname={props.foodname}
              />
        })}
        </div>
        </div>
    )
}

export default MenuRender