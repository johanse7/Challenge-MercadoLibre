import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchProductsByParam } from "../redux/actions/productsActions";
import useSEO from "../hooks/useSEO";

import "../styles/sass/01_page/_searchBox.scss";

const SearchBox = (props) => {
  const [form, setValues] = useState({
    searchValue: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  //Set search value as Metadata title
  useSEO({
    title: form.searchValue,
  });

  const handleSearch = () => {
    fetchProductsByParam(props, form.searchValue);
  };

  const handleHome = () => {
    window.location = "/";
  };

  //Enter key down
  const onKeyDown = (e) => {
    if (e.keyCode == 13) {
      fetchProductsByParam(props, e.target.value);
    }
  };

  return (
    <>
      <section className="item container-searchBox">
        <div className="item logoMeli">
          <img
            src="../src/assets/Logo_ML@2x.png"
            alt="Logo Meli"
            width="50"
            heght="50"
            onClick={() => handleHome()}
          />
        </div>

        <div className="item SearchBar">
          <input
            name="searchValue"
            id="searchValue"
            placeholder="Nunca dejes de buscar"
            className="input-search"
            onKeyDown={onKeyDown}
            onChange={handleInput}
          />
        </div>
        <div className="btnSearch" type="submit">
          <img
            src="../src/assets/ic_Search.png"
            alt="Logo Meli"
            onClick={() => handleSearch()}
          />
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(SearchBox);
