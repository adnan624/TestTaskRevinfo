import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./api.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const Api = () => {
  const [apiData, setApiData] = useState(null);
  const [sortedList, setSortedList] = useState(null);
  const [count, setCount] = useState("");
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [categories, setCategories] = useState("");
  const [categoryList, setCategoryList] = useState([]);


  const handleOrder = (event) => {
    setOrder(event.target.value);

    if (order !== "ascending") {
      sortedList.sort(function (a, b) {
        if (a.API < b.API) {
          return -1;
        }
        if (a.API > b.API) {
          return 1;
        }
        return 0;
      });
    } else if (order !== "descending") {
      sortedList.sort(function (a, b) {
        if (a.API < b.API) {
          return 1;
        }
        if (a.API > b.API) {
          return -1;
        }
        return 0;
      });
    }
  };

  console.log(categories);

  const fetchData = () => {
    Axios.get("https://api.publicapis.org/entries").then((res) => {
      setApiData(res?.data?.entries);
      setCount(res?.data?.count);
      let responce = res?.data?.entries
        ?.filter(
          (item, index, self) =>
            self.findIndex((i) => i.Category == item.Category) == index
        )
        .map((item) => item.Category)
        .sort((a, b) => a - b);
      setCategoryList(responce);
      setSortedList(
        res?.data?.entries.filter((item) => {
          if (item.API.toLowerCase().includes(search.toLocaleLowerCase())) {
            return true;
          }
        })
      );
    });
  };

  const handleSelectCategory = (event) => {

      setSortedList(apiData?.filter((item)=>item.Category === event.target.value))
      let res = apiData
      ?.filter(
        (item, index, self) =>
          self.findIndex((i) => i.Category == item.Category) === index
      )
      .map((item) => item.Category)
      .sort((a, b) => a - b);
    console.log("res=>>>>", res);
  
    setCategories(event.target.value);
  };

  useEffect(() => {
    fetchData(search);
  }, [search]);

  const check = (key) => {
    const object = {
      unknown: "red",
      no: "grey",
      yes: "green",
      true: "#10b981",
      false: "#ef4444",
    };
    return object[key];
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
        <TextField
          fullWidth
          label="Search...."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{ width: "400px", marginRight: "30px" }}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Listing Order</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={order}
            onChange={handleOrder}
            style={{ width: "400px" }}
          >
            <MenuItem value={"ascending"}>Ascending</MenuItem>
            <MenuItem value={"descending"}>Descending</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Category DropDown
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categories}
            onChange={handleSelectCategory}
            style={{ width: "400px" }}
          >
            {categoryList?.map((items) => (
              <MenuItem value={`${items}`}>{items}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <h3 style={{ display: "flex", justifyContent: "center" }}>
        {sortedList?.length} Results Found{" "}
      </h3>
      <div className="outer-div">
        {sortedList?.map((items) => {
          return (
            <div className="card-outer">
              <h2>{items.API}</h2>
              <p className="card-desc">{items.Description}</p>
              <div>
                <div className="card-detail">
                  <p>
                    {items.Auth ? "API key authorization" : "No Authorization"}
                  </p>{" "}
                  <p
                    style={{
                      height: "40px",
                      width: "50px",
                      backgroundColor: items.Auth ? "#10b981" : "#3b82f6",
                    }}
                  ></p>
                </div>
                <div className="card-detail">
                  <p>{items.HTTPS ? "HTTPS available" : "HTTPS unavailable"}</p>{" "}
                  <p
                    style={{
                      height: "40px",
                      width: "50px",
                      backgroundColor: check(items.HTTPS),
                    }}
                  ></p>
                </div>
                <div className="card-detail">
                  <p>{items.Cors ? "CORS available" : "CORS unavailable"}</p>{" "}
                  <p
                    style={{
                      height: "40px",
                      width: "50px",
                      backgroundColor: check(items.Cors),
                    }}
                  ></p>
                </div>
                <div className="category-div">Category: {items.Category}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Api;
