import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  // fetch product details from localhost:9999/products/:id
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9999/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);

  console.log(product);

  return (
    <div>
      <h1 className="text-center">Detail</h1>
      <div className="row">
        <div className="col-4">
          {/* Display the image */}
          {product.images && product.images.length > 0 && (
            <img
              src={product.images[0].url}
              alt="Product Image"
              className="img-fluid"
            />
          )}
          {/* You can add additional logic to handle cases where there are no images */}
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Price: {product.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {/* Product description */}
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
