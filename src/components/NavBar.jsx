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
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import logo from "../images/pb.png";
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
    <main className="nav">
{/* <figure className="logo">
<img className="about__image" src={logo} alt="" width="40px" />
</figure> */}
      {/* <div className="navbar__items"> */}
      <input type="checkbox" id="menu" className="check" />
      <label className="nav__close" for="menu">
        <CgClose size={30} className="nav__icon"/>
      </label>
      <label className="nav__open" for="menu">
        <GiHamburgerMenu size={30} className="nav__icon"/>
      </label>
      <ul className="nav__menu">
        {/* <li className="navbar__button"> */}
        <li className="nav__list">
          <Link to="/create">
            <button className="navbar__create">NEW</button>
          </Link>
        </li>
        {/* <li /> */}
        {/* <section className="navbar__select"> */}

        <li className="nav__list">
          <div className="navbar__searchbar">
            <SearchBar />
          </div>
        </li>
        <li className="nav__list">
          <select onChange={(e) => handleSort(e)}>
            <option>Order alphabetically</option>
            <option value="asc">Order by: A-Z</option>
            <option value="desc">Order by: Z-A</option>
          </select>
        </li>
        <li className="nav__list">
          <select onChange={(e) => handleAttackSort(e)}>
            <option value="all">Sort by STRENGTH</option>
            <option value="attackMin">Sort by: Min STR</option>
            <option value="attackMax">Sort by: Max STR</option>
          </select>
        </li>
        <li className="nav__list">
          <select onChange={(e) => handleFilterCreated(e)}>
            <option value="all">Original/Custom</option>
            <option value="api">Original Pokemons</option>
            <option value="db">Custom Pokemons</option>
          </select>
        </li>
        <li className="nav__list">
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
        </li>
        {/* </section> */}
        {/* </div> */}
        <li
          className="nav__list"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          <RxReload size={20} />
        </li>
      </ul>
    </main>
  );
}
