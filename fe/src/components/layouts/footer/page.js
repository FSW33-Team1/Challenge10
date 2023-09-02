import React from 'react'
import { Row } from "@/lib/bootstrap";
// import { Link } from "react-router-dom";
// import { asset_card, asset_home } from "../../assets/images";
import Image from 'next/image'

const Footer = () => {

	const linkFooter = [
		{
			title: "Content",
			links: [
				{
					item: "Copywriting",
				},
				{
					item: "Social Media",
				},
				{
					item: "Interactive Media",
				},
				{
					item: "Motion Design",
				},
			]
		},
	]

	const imgFooter = [
		{
			item: "/images/home/footer-1.webp",
		},
		{
			item: "/images/home/footer-2.webp",
		},
		{
			item: "/images/home/footer-3.webp",
		},
		{
			item: "/images/home/footer-4.webp",
		},
		{
			item: "/images/home/footer-5.webp",
		},
		{
			item: "/images/home/footer-6.webp",
		},
	]
	return (
		<footer>
			<div className="container">
				<Row>
					<div className="col-md-4">
						<img src={"/images/home/logo.webp"} alt='logo' className='mb-2' />
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti provident hic eligendi! Dolorum, eaque quis! Et, explicabo?</p>
					</div>
					{linkFooter.map((item, i) => (
						<div className="col-md-2" key={i}>
							<h3>{item.title}</h3>
							<ul>
								{item.links.map((link, i) => (
									<li key={i}><a href="#">{link.item}</a></li>
								))}
							</ul>
						</div>
					))}

					<div className="col-2">
						<Row>
							{imgFooter.map((item, i) => {
								<div className="col-4" key={i}>
									<img src={item.item} alt="icon footer" className="img-fluid" />
								</div>
							})}
						</Row>
					</div>
				</Row>
				<hr />
				<div className="text-copyright text-center">
					<p>	&#169; Copyright 2023. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
