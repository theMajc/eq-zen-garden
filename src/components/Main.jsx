import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom"

import logoImg from '../statics/images/logo.png';

import '../statics/styles/main.css';
 
const Main = withRouter((props) => {
	const {
		logo = logoImg,
		title = "Earthquack Zen Garden!",
		userName = "",
	} = props;

	const [path, setPath] = useState("/");

	useEffect(() =>{
		setPath(props.location.pathname)
	}, [props.location.pathname]);

	let logoRotate = 30;
	if (path.indexOf("/detail") === 0) {
		logoRotate = 240;
	} else if (path.indexOf("/profile") === 0){
		logoRotate = 120;
	}

	return (
		<div className="main-wrpaper">
			<div className="nav-header">
				<div className="logo">
					<Link to='/'>
						<img src={logo} className={`rotateImg${logoRotate}`} alt="Logo"/>
					</Link>
				</div>
				<div className="title">
					<h1>{title}</h1>
				</div>
				<div className="link">
					<Link to='/profile'>{`Welcome ${userName}`}</Link>
				</div>
			</div>

			<div className="content">
				{props.children}
			</div>
		</div>
	);
});

export default Main;