import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const [product, setProduct] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const [message, setMessage] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9999/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setComments(data.comments);
        console.log(data);
      });
  }, [id]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have a function to submit comments to the server
      const response = await fetch(`http://localhost:9999/comments/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: commentText,
          pid: id,
        }),
      });

      if (response.ok) {
        // Assuming you have a function to refresh comments after submission
        setMessage("Comment added successfully");
      } else {
        setMessage("Comment rejected");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Product Detail</h1>
      <Link to="/" className="btn btn-primary mb-2">
        Back to Products
      </Link>
      <div className="row">
        <div className="col-lg-6">
          {/* Display the selected image */}
          {product.images && product.images.length > 0 && (
            <img
              src={product.images[selectedImageIndex].url}
              alt="Product Image"
              className="selected-image img"
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
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <h6 className="card-subtitle text-muted">ID: {product._id}</h6>
              <p className="card-text">Price: ${product.price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {/* Product description */}
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Product Description</h4>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {/* Comments section */}
        <div className="col-12">
          <h4>Comments</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Comment</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p>{message}</p>
          </form>
          <hr />
          <div>
            {comments.map((comment, index) => (
              <div key={index} className="mb-3">
                <h6 className="card-subtitle mb-2 text-muted">
                  {comment.author}
                </h6>
                <p className="card-text">{comment.text}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
