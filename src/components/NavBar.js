import React, { Component } from 'react'
import { 
  Link
} from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
    <Link className="navbar-brand" to="/">DailyNews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <div className="dropdown-center">
          <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item"  to="/business">Business</Link></li>
            <li><Link className="dropdown-item"  to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item"  to="/general">General</Link></li>
            <li><Link className="dropdown-item"  to="/health">Health</Link></li>
            <li><Link className="dropdown-item"  to="/science">Science</Link></li>
            <li><Link className="dropdown-item"  to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item"  to="/technology">Technology</Link></li>
          </ul>
          </div>
    
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar