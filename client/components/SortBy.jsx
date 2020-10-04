import React from 'react';


const SortBy = (props) => {
  return (
    <label className="sort-by-label">Sort By:
      <select className="sort-by-select" onChange={(e) => {props.sortByOnClick(e, e.target.value, props.data)}}>
        <option value="Recommended">Recommended</option>
        <option value="Newest">Newest</option>       
      </select>
    </label>
  )   
}

export default SortBy;