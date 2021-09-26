import React from "react";
import PropTypes from "prop-types";
import { useState } from 'react';

const AddLink = ( {onAdd} ) => {

    
    const [text, setText] = useState('')


    const onSubmit = (e) => {
        e.preventDefault();
        
        if(!text) {
            alert("Please add text");
            return;
         }

         onAdd({ text });

         setText("");
    }

    return <div>
        <form className="add-form" onSubmit={onSubmit}>
            <label>
                <input className="form-control" 
                type="text" placeholder="Add Link" 
                name="addLinkText" 
                value={text}
                onChange={ (e) => {
                    setText(e.target.value)
                }}/>

            </label>

            <input type="submit" 
            value="Save" 
            className="btn btn-block btn-primary" />

        </form>
    </div>
}

AddLink.propTypes = {
    text: PropTypes.string
}

export default AddLink;