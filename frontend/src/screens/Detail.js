import React from "react";

const Detail = () => {
  return (
    <div>
      <h1 className="text-center">Detail</h1>
      <div className="row">
        <div className="col-4">
          <img
            className="img-fluid"
            src="https://picsum.photos/200/300"
            alt="Responsive image"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                price
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 ">
        {/* product description */}
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        {/* Comment */}
        <div className="col-12">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
