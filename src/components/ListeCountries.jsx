import "./ListCountries.css";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries,getUniversity } from "../redux/Countries";
import { addselected } from "../redux/Countries";





export default function ListCountries() {
  const dispatch = useDispatch();
  const dataa = useSelector((state) => state.c.data);
  const loadd = useSelector((state) => state.c.load);
  const errorr = useSelector((state) => state.c.error);
  const select = useSelector((state) => state.c.selectedCountry);
  
 
  //const [selected, SetSelected] = useState('');

  //ordred by name of countries
  let sorted = [];

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getUniversity());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let content;
  if (loadd === "pending")
    content = (
      <div className="center">
        <div className="loader"></div>
      </div>
    );
  if (loadd === "idle") {
    dataa.map((item) => sorted.push(item.name.common));
    sorted = sorted.sort();
    content = (
      <>
        <div className="input-group mt-4">
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(e) => {
              dispatch(addselected(e.target.value));
            }}
          >
            <option value="Countries" key={0} selected>Countries ...</option>
            {sorted.map((item, index) => {
              return (
                <option value={item} key={index+1}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <br />
        <br />
        <br />
        {
        (select==="Countries") && <div className="ntfound"><h1 style={{color:"blue"}}>4 0 4 !... </h1></div>
        }
      </>
    );
  }
  if (errorr !== null) {
    content = (
      <div className="center">
        <h1 style={{color:"blue"}}>error de chargement... </h1>
      </div>
    );
  }

  return content;
}
