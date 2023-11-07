import axios from "axios";
import React, { useEffect, useState } from "react";

function Countris() {
  const [data, setData] = useState([]);
  const fetchContry = async () => {
    const res = await axios.get("https://restcountries.com/v2/all");
    const resData = await res.data;
    console.log(resData, "res");
    setData(resData);
  };
  useEffect(() => {
    fetchContry();
  }, []);
  return (
    <div className="main_wrapper">
      {data.map((e) => {
        return (
          <div className="wrapper">
            <div>
              <img className="flags" src={e.flag} alt="flag" />
            </div>
            <div>{e.name}</div>
            <div>population: {e.population}</div>
            <div>Region: {e.region}</div>
            <div>Capital: {e.capital}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Countris;
