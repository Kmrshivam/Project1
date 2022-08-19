import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://assessment.api.vweb.app/products")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <h1 className="text-center">Storing Api data in table</h1>
      <br />
      <div className="container">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Product_id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Stock</th>
            <th scope="col">Selling_Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.product_id}</td>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.selling_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default FetchApi;
