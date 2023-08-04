import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export default function Navlayout() {

    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><b>CRC-TRAINING</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
        <li className="nav-item">
          <Link
            className="nav-link" to="/firstcomponent">Firstcomponent
            </Link>
          </li>
  
          <li className="nav-item">
          <Link
            className="nav-link" to="/gallery1">Gallery
            </Link>
          </li>
  
          <li className="nav-item">
              <Link
            className="nav-link" to="/demo">Demo22
            </Link>
          </li>
  
          <li className="nav-item">
              <Link
            className="nav-link" to="/expression">Evaluateexpression
            </Link>
          </li>
  
          <li className="nav-item">
              <Link
            className="nav-link active" aria-current="page" to="/product">Product
            </Link>
          </li>

          <li className="nav-item">
              <Link
            className="nav-link active" aria-current="page" to="/inlinecss">CSS
            </Link>
          </li>

          <li className="nav-item">
              <Link
            className="nav-link active" aria-current="page" to="/likedislike">Likedislike
            </Link>
          </li>

          <li className="nav-item">
              <Link
            className="nav-link active" aria-current="page" to="/todolist">Todolist
            </Link>
          </li>

          <li className="nav-item">
              <Link
            className="nav-link active" aria-current="page" to="/about">About
            </Link>
          </li>
         
         </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <Outlet/>
      </div>
    );
  }
  