import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCharacters } from "../redux/actions.js";
import "../styles/searchbar.css";
import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function hanldeInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameCharacters(name));
    setName("");
    setCurrentPage(1);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Pokemon name..."
        value={name}
        onChange={(e) => hanldeInputChange(e)}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" onClick={handleSubmit} disabled={!name}>
        <BiSearchAlt2 size={20} />
      </button>
    </div>
  );
}
