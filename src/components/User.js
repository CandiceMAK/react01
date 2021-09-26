import React from "react";

const User = (props) => {
    return(
    <div className="card justify-content-center" style={{display: "flex", width:200, justifyContent:"center"}}>
        <img className="card-img-top" src={'logo192.png'} style={{height:100,width:100}} />
            <div className="card-body">
                <h3 className="card-title">{props.name}'s Links</h3>
            </div>
    </div>
    )
}

export default User;