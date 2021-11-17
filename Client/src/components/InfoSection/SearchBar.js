import React, { useState } from "react";
import "./SearchBar.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const classes = useStyles();
  const [city, setCity] = React.useState('');
  const handleChange = (event) => {
    setCity(event.target.value);
  }
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      <FormControl className={classes.margin}> 
      <div className="SelectCity">
        <NativeSelect
          defaultValue={1}
          id="City"
          onChange={handleChange}   
        >
          <option aria-label="None" value="" />
          <option value={1}> City</option>
          <option value={2}>Delhi</option>
          <option value={3}>Noida</option>
          <option value={4}>Hyderabad</option>
        </NativeSelect>
        </div>
      </FormControl>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;