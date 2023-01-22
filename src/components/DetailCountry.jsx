import React from "react";
import { useSelector } from "react-redux";
import "./DetailCountry.css";

export default function DetailCountry() {
  const dataa = useSelector((state) => state.c.data);
  const select = useSelector((state) => state.c.selectedCountry);
 // console.log(dataa);

  return (
    <div className="container">
      {dataa?.map((item) => {
        if (item.name.common === select) {
          return (
            <>
              <div className="flex">
                <img
                  src={item.flags.png}
                  alt={`${item.name.common} flag`}
                  style={{
                    width: "400px",
                    height: "270px",
                    transition: "transform 3s",
                  }}
                />
                <div className="list-group adjust">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action active"
                  >
                    <b>Officiel Name : {item.name.official}</b>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    {" "}
                    <b>Capital : &nbsp; {item.capital}</b>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    {" "}
                    <b>Region : &nbsp; {item.region}</b>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    {" "}
                    <b>Population : &nbsp; {item.population}</b>
                  </a>
                  <a href="#" className="list-group-item list-group-item-action">
                    {" "}
                    <b>Time Zone: &nbsp;{item.timezones}</b>
                  </a>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
