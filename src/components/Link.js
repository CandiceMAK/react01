import React from "react";

const Link = ({item}) =>{
    return (
        <div>
            <li className="list-group-item">{item.text}</li>
        </div>
    )
}


export default Link;