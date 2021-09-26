import React from "react";
import Link from "./Link";


const List = ({listItems}) => {
    
    return (
        
    <div className="card" style={{width: 500}}>
      <ul className="list-group list-group-flush">
        {listItems.map((item)=>
            (<Link key={item.id} item={item} />)
        )}
      </ul>
    </div>
)
}



export default List;