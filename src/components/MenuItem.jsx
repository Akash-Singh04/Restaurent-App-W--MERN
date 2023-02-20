import React from "react"
function MenuItem(props){
    return(
        <div className={props.hvr + props.food + props.mediumview + props.largeview }>
                <img className={props.hvr + props.fooditem} src={props.foodlink} />
                <a href="#"><span className="foodlinks"></span></a>
                <h5 className="title">{props.foodname}</h5>
                
            </div>

    )
}

export default MenuItem