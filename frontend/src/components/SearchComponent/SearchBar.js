import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SearchBar({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase()) || value.altname.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <form action="#" className="search-location mt-md-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 align-items-end">
            <div className="form-group">
              <div className="form-field">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm địa điểm"
                  value={wordEntered}
                  onChange={handleFilter}
                />
                <button><span className="ion-ios-search"></span></button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 1).map((value, key) => {
            return (
              <Link className="dataItem" to={value.link} target="_blank">
                <p style={{marginTop:"0px", fontSize: "16px"}}>{value.name}</p>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SearchBar;