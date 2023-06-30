import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterCharactersByTypes,
  filterCreated,
  orderByName,
  orderByAttack,
  getTypes,
  getCharacters,
  cleanFilter,
} from "../redux/actions.js";
import SearchBar from "./SearchBar";
import { RxReload } from "react-icons/rx";
import "../styles/navbar.css"

export default function NavBar({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const charactersFilter = useSelector((state) => state.charactersFilter);

  function handleClick(e) {
    e.preventDefault();
    dispatch(cleanFilter());
    dispatch(getCharacters());
  }

  function handleFilterStatus(e) {
    dispatch(filterCharactersByTypes(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterCreated(e) {
    // console.log("handleFilterCreated: ", e.target.value);
    dispatch(filterCreated(e.target.value));
  }

  function handleSort(e) {
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleAttackSort(e) {
    dispatch(orderByAttack(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  return (
    <main className="navbar">
      <div className="navbar__items">
        <div className="navbar__button">
          <Link to="/create">
            <button className="navbar__create">NEW</button>
          </Link>
        </div>
        {/* <section className="navbar__select"> */}



          <div className="navbar__searchbar">
            <SearchBar />
          </div>

          <select onChange={(e) => handleSort(e)}>
            <option>Order alphabetically</option>
            <option value="asc">Order by: A-Z</option>
            <option value="desc">Order by: Z-A</option>
          </select>

      
          <select onChange={(e) => handleAttackSort(e)}>
            <option value="all">Sort by STRENGTH</option>
            <option value="attackMin">Sort by: Min STR</option>
            <option value="attackMax">Sort by: Max STR</option>
          </select>

          <select onChange={(e) => handleFilterCreated(e)}>
            <option value="all">Original/Custom</option>
            <option value="api">Original Pokemons</option>
            <option value="db">Custom Pokemons</option>
          </select>

          <select onChange={(e) => handleFilterStatus(e)}>
            <option value="Types">Types</option>
            <option value="normal">Normal Pokemons</option>
            <option value="fighting">Fighting Pokemons</option>
            <option value="flying">Flying Pokemons</option>
            <option value="poison">Poison Pokemons</option>
            <option value="ground">Ground Pokemons</option>
            <option value="rock">Rock Pokemons</option>
            <option value="bug">Bug Pokemons</option>
            <option value="ghost">Ghost Pokemons</option>
            <option value="steel">Steel Pokemons</option>
            <option value="fire">Fire Pokemons</option>
            <option value="water">Water Pokemons</option>
            <option value="grass">Grass Pokemons</option>
            <option value="electric">Electric Pokemons</option>
            <option value="psychic">Psychic Pokemons</option>
            <option value="ice">Ice Pokemons</option>
            <option value="dragon">Dragon Pokemons</option>
            <option value="dark">Dark Pokemons</option>
            <option value="fairy">Fairy Pokemons</option>
            <option value="unknown">Unknown Pokemons</option>
            <option value="shadow">Shadow Pokemons</option>
          </select>
        {/* </section> */}
      </div>
      <button
            className="navbar__reload"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <RxReload size={20}/>
          </button>
    </main>
  );
}
