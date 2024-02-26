import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9999/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div>
      <h1 className="text-center">Detail</h1>
      <Link to="/" className="btn btn-primary mb-2">
        Back
      </Link>
      <div className="row">
        <div className="col-6">
          {/* Display the selected image */}
          {product.images && product.images.length > 0 && (
            <img
              src={product.images[selectedImageIndex].url}
              alt="Product Image"
              className="selected-image"
            />
          )}
          {product.images && product.images.length > 1 && (
            <div className="row mt-3">
              {/* Display thumbnails for other images in the same row */}
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="col-4"
                  style={{
                    transition: "transform 0.2s ease-out",
                    transform:
                      index === selectedImageIndex ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <img
                    src={image.url}
                    alt={`Thumbnail ${index}`}
                    className={`img-thumbnail ${
                      index === selectedImageIndex ? "selected-thumbnail" : ""
                    }`}
                    style={{ cursor: "pointer", width: "100%" }}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6 className="card-subtitle text-muted">ID: {product._id}</h6>
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
