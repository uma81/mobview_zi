import React from 'react'
import { NavLink } from 'react-router-dom'
import "./nav.css";
function Nav() {
	return (
		<div>



			{/* <!-- Start Header/Navigation --> */}
			<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
				<div className="container">
					<a className="navbar-brand" href="index.html">Furni<span>.</span></a>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsFurni">
						<ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
							<li className="nav-item ">
								<NavLink to="/" className="nav-link" >Home</NavLink>
							</li>
							<li><NavLink className="nav-link" to="/shop">Shop</NavLink></li>

							{/* <li><Link to="/shop" className="nav-link">Shop</Link></li> */}
							<li><NavLink to="/about" className="nav-link">About us</NavLink></li>
							<li><NavLink to="/services" className="nav-link">Services</NavLink></li>
							<li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
							<li><NavLink to="/contact" className="nav-link">Contact us</NavLink></li>
						</ul>

						<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
							<li><a className="nav-link" href="#"><img src="assets/images/user.svg" /></a></li>
							<li><a className="nav-link" href="cart.html"><img src="assets/images/cart.svg" /></a></li>
						</ul>
					</div>
				</div>

			</nav>
			{/* <!-- End Header/Navigation --> */}

		</div>
	)
}

export default Nav
