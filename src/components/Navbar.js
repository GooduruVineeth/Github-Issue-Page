import React, {useState} from "react";

const Navbar = ({handleSearch}) => {
  const [searchTxt,setSearchTxt]=useState("")
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand"><b>Github Issue Page</b></a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e)=>{setSearchTxt(e.target.value)}}
        />
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={(e)=>{
          handleSearch(searchTxt)}}>
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
