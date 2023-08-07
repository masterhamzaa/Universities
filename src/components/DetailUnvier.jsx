import React from "react";
import { useSelector } from "react-redux";
export default function DetailUnvier() {
  const select = useSelector((state) => state.c.selectedCountry);
  const dataa = useSelector((state) => state.u.data).filter(
    (item) => item.country === select
  );

  return (
    <div>
      {dataa.length === 0 ? (
        <div className="center">
          <div className="loader"></div>
        </div>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Site Officiel</th>
            </tr>
          </thead>
          <tbody>
            {dataa?.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                      <a href={item.web_pages} target="_blank" rel="noreferrer">
                        {item.web_pages}
                      </a>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

