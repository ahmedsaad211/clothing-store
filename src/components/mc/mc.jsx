import React, { useState } from "react";
import "./mc.css";

export default function Mc(props) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (item) => {
    setSelectedProduct(item); // Set the selected product
  };

  const closeModal = () => {
    setSelectedProduct(null); // Close the modal
  };

  return (
    <>
      {/* Men's Clothing Section */}
      <section className="section1 container-fluid d-flex justify-content-center align-items-center" id="mc">
        <h1>Men's Clothing</h1>
      </section>
      <section className="section2 container-fluid d-flex justify-content-center my-5">
        <div className="container row w-75" id="menClothing">
          {props.mc.map((item, index) => (
            <div
              className="card col-12 col-md-6 col-lg-4 my-4"
              key={index}
              onClick={() => handleCardClick(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="shadow card-content">
                <div className="div-img1 p-4">
                  <img className="card-img-top img1" src={item.image} alt={item.title} />
                </div>
                <div className="card-body card1-text">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <p>price : {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jewelery Section */}
      <section className="section1 container-fluid d-flex justify-content-center align-items-center" id="j">
        <h1>Jewelery</h1>
      </section>
      <section className="section2 container-fluid d-flex justify-content-center my-5">
        <div className="container row w-75" id="jewelery">
          {props.j.map((item, index) => (
            <div
              className="card col-12 col-md-6 col-lg-4 my-4"
              key={index}
              onClick={() => handleCardClick(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="shadow card-content">
                <div className="div-img1 p-4">
                  <img className="card-img-top img1" src={item.image} alt={item.title} />
                </div>
                <div className="card-body card1-text">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <p>price : {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Electronics Section */}
      <section className="section1 container-fluid d-flex justify-content-center align-items-center" id="e">
        <h1>Electronics</h1>
      </section>
      <section className="section2 container-fluid d-flex justify-content-center my-5">
        <div className="container row w-75" id="electronics">
          {props.e.map((item, index) => (
            <div
              className="card col-12 col-md-6 col-lg-4 my-4"
              key={index}
              onClick={() => handleCardClick(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="shadow card-content">
                <div className="div-img1 p-4">
                  <img className="card-img-top img1" src={item.image} alt={item.title} />
                </div>
                <div className="card-body card1-text">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <p>price : {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Women's Clothing Section */}
      <section className="section1 container-fluid d-flex justify-content-center align-items-center" id="w">
        <h1>Women's Clothing</h1>
      </section>
      <section className="section2 container-fluid d-flex justify-content-center my-5">
        <div className="container row w-75" id="womenClothing">
          {props.wc.map((item, index) => (
            <div
              className="card col-12 col-md-6 col-lg-4 my-4"
              key={index}
              onClick={() => handleCardClick(item)}
              style={{ cursor: "pointer" }}
            >
              <div className="shadow card-content">
                <div className="div-img1 p-4">
                  <img className="card-img-top img1" src={item.image} alt={item.title} />
                </div>
                <div className="card-body card1-text">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                  <p>price : {item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bootstrap Modal */}
      {selectedProduct && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "90vw" }}>
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
                onClick={closeModal}
              >
                &times;
              </button>
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.title}</h5>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "50vh", objectFit: "contain" }}
                />
                <p>{selectedProduct.description || "No description available."}</p>
                <p><strong>Price:</strong> {selectedProduct.price}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
