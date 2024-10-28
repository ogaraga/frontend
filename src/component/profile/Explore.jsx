import {useState } from "react";
import styles from "./Profile.module.css";
import searchData from "../search/Search.json";
function Explore() {
  const [filteredData, setFilteredData] = useState([]);

  
  const handleGetSearch = (e) => {
  const filterWord = e.target.value;
  searchData.filter((val) => {
    if (val.name.toLowerCase().includes(filterWord.toLowerCase())) {
      return setFilteredData(val.name);
    }else{
        return '';
    }
  })};
  return (
    <div >
        <input
          type="search"
          placeholder=" type and search"
          onChange={handleGetSearch}
        />
      {filteredData.length !== 0 && (      
      <div className={styles.filteredItems}>
        {searchData.map((val, idx) => {
          <span key={idx}>{val.name}</span>;
          <span key={idx}>{val.link}</span>;
        })}
      </div>)}
    </div>
  );
}
export default Explore;
