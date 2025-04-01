import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const priceArray = [899, 750, 1600, 500, 1750, 800, 2500, 900, 1250, 680, 3300, 2170, 18000, 32000, 1450, 1800, 680, 400, 300, 300];

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 50.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty); 
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.image}
                                  className="w-100"
                                  alt="Product"
                                />
                                <a href="#!">
                                  <div className="mask"></div>
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.title}</strong>
                              </p>
                              <button
                                type="button"
                                className="btn btn-link px-2"
                                onClick={() => removeItem(item)}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <span className="lead mx-2">{item.qty}</span>
                              <button
                                type="button"
                                className="btn btn-link px-2"
                                onClick={() => addItem(item)}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex justify-content-between">
                              <p className="lead mb-0">
                              <strong>
                                Rs. {item.price} x {item.qty} = Rs. {item.price * item.qty}
                              </strong>



                              </p>
                            </div>
                          </div>
                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Subtotal ({totalItems} items)
                        <span>Rs. {subtotal.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Rs. {shipping.toFixed(2)}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total Amount</strong>
                        </div>
                        <span>
                          <strong>Rs. {(subtotal + shipping).toFixed(2)}</strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Go to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      {state.length === 0 && <EmptyCart />}
      {state.length !== 0 && <ShowCart />}
      <Footer />
    </>
  );
};

export default Cart;
