import React from 'react';
import SearchIcon  from "../../../public/search.svg";

const SearchIconSvg: React.FC<{ size: number }> = (props) => {
    return <SearchIcon style={{ width: `${props.size}px`}}/>
}

export default SearchIconSvg;
