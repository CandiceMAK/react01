import React from 'react';

const searchBar = {
    display: "inline-flex",

}

const Search = () => {
  return (
  <div className="d-flex justify-content-center">
  <form style={{searchBar}}action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Links</span>
        </label>

        <input type="text" id="header-search" placeholder="Search Links" name="searchBar" />

        <button type="submit">Search</button>
        
    </form>
    </div>
  )
}

export default Search;