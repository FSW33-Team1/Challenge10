import React from 'react'
// import { Link } from "react-router-dom";

const Navbar = ({ user, logOut }) => {

	const itemLinks = [
		{
			name: "Home",
			url: "/"
		},
		{
			name: "Games",
			url: "/games"
		},
	]

	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img src={"/images/home/logo.webp"} alt="logo" className='img-fluid' />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">


						{itemLinks.map((item, i) => (
							<li className="nav-item" key={i}>
								<a className="nav-link" href={item.url}	>{item.name}</a>
							</li>
						))}



					</ul>
					{user ? <span>Hello <a href="/profile">{user?.username}</a>, <a href="/login" className="nav-link" onClick={logOut}>
						Logout
					</a>
					</span> : <a href={"/register"} className='btn-regiter'>Register</a>}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
