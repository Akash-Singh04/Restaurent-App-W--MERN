import React, { useState } from "react";
import MenuItemBs from "./menuitemBs"
function Menu(){
    

    images = ["https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
]
   
    return(
        <div>
         
        {images.map((imagelink , index)=>{
            return (
        <MenuItemBs  key ={index} food=" food " medium = " col-md-6 " large = " col-lg-4 " imageSrc={imagelink}/>
        )
        })
        }
        </div>
        )
    
}

export default Menu