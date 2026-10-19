import { Link } from "react-router-dom";

import {
  Ampersand,
  Search,
  Heart,
  ShoppingCart,
} from "lucide-react";

import "../styles/inputs.css";
import { useState } from "react";

function Navbar({ search, setSearch }) {
  return (
    <div className="container">

      <div className="subcontainer1">

        <div className="stsub1">
          <h1>
            <Ampersand
              size={40}
              color="#151414"
              strokeWidth={2.5}
            />
          </h1>
        </div>

        <div className="sec-sub">
          <ul>
            <li>New & Featured</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
          </ul>
        </div>

      </div>

      <div className="subcontainer2">

        <div className="searchbar1">

          <div className="search-bar">

            <Search color="#171616" size={18} />

            <input
              type="text"
              value={search}
              placeholder="Search products"
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

        <div className="icons">

          <Heart size={28} strokeWidth={1.75} />

          <Link to="/cart">
            <ShoppingCart
              size={28}
              strokeWidth={1.75}
              color="black"
            />
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Navbar;