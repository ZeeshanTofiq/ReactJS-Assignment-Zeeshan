import React from "react";
import styles from "./input.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
const InputSearch = ({ inputVal, setInputVal, onClickSearch }) => {
  return (
    <div className={styles.InputContainer}>
      <input
        value={inputVal}
        placeholder="Enter city"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <span className={styles.searchIcon} onClick={onClickSearch}>
        <SearchIcon />
      </span>
    </div>
  );
};
export default InputSearch;
