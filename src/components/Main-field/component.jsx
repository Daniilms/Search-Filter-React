import SearchList from "../SearchList/component";
import "./style.css";
import Input from "../Input/component";
import { useState } from "react";
import words from "../../../constants/constant";

function MainField() {
  const [searchArray, setSearchArray] = useState([]);
  return (
    <div className="container">
      <div className="wrp flex-modifier">
        <div className="main-content flex-modifier">
          <h1 className="main-header">search app</h1>
          <Input
            words={words}
            searchArray={searchArray}
            setSearchArray={setSearchArray}
          />
          <SearchList words={words} searchArray={searchArray} />
        </div>
      </div>
    </div>
  );
}

export default MainField;
