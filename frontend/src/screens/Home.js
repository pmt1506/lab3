import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // fetch all product from localhost:9999/products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // Empty dependency array to run the effect only once when the component mounts
  console.log(products);

  return (
    <div>
      <h1 className="text-center">Home</h1>
      {/* add new product button */}
      <Link to="/add" className="btn btn-primary">
        Add new product
      </Link>
      <div className="row mt-2">
        <div className="col-12">
          {/* create table */}
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
              </tr>
            </thead>
            <tbody>
              {/* map product */}
              {products.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
