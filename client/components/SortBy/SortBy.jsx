import React from 'react';


const SortBy = (props) => {
  return (
    <label className="sortByLabel">Sort By:
      <select className="sortBySelect" onChange={(e) => {props.sortByOnClick(e, e.target.value, props.data)}}>
        <option value="Recommended">Recommended</option>
        <option value="Newest">Newest</option>       
      </select>
    </label>
  )   
}

export default SortBy;