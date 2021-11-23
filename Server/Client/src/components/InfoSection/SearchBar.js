import React, { useState } from "react";
import "./SearchBar.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function SearchBar({ placeholder }) {
  const [data, updateData] = useState([
    {
      name: "Loading.....",
      city: "Delhi",

      link: "/",
    },
  ]);

  React.useEffect(() => {
    async function op() {
      var x = await axios.post("http://localhost:5000/getSearchData", {});
      updateData(x.data.data);
    }
    op();
  }, []);
  const [filteredData, setFilteredData] = useState([]);
  const classes = useStyles();
  const [City, setCity] = React.useState(1);
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    var newFilter;
    if (City == 1) {
      newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
    } else {
      newFilter = data.filter((value) => {
        return (
          value.name.toLowerCase().includes(searchWord.toLowerCase()) &&
          value.city.toLowerCase().includes(City.toLowerCase())
        );
      });
    }

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
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
            <NativeSelect defaultValue={1} id="City" onChange={handleChange}>
              <option aria-label="None" value="" />
              <option value={1}> City</option>
              {data && data.map((cities)=>{
                return (
                  <option value= {cities.city} > {cities.city} </option>
              )
              })}
              
              <option value={"Delhi"}>Delhi</option>
              <option value={"Noida"}>Noida</option>
              <option value={"Hyderabbad"}>Hyderabad</option>
            </NativeSelect>
          </div>
        </FormControl>
      </div>
      <div className="dropdown">
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <p>{value.name} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
