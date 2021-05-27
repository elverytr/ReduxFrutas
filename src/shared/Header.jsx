import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light mb-3 bg-dark">
        <div className="container-fluid">
          <div className="col-8">
            <a className="navbar-brand text-light fw-bolder" href="#">
              Redux Frutería
            </a>
          </div>
          <button
            className="navbar-toggler bg-success"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse col-4 mt-2"
            id="navbarSupportedContent"
          >
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul> */}
            <form className="d-flex col-12">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success col-4" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
