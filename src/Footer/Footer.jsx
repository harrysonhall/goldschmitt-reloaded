import React from 'react';

// import './Footer.css'


import logo from './goldschmitt-logo.png'

const Footer = () => {
	return (
			<div id='footer'>

				<div id="footer-links">
				    <div className="text-14-600">About</div>
				    <div className="text-14-600">Contracts</div>
				    <div className="text-14-600">Services</div>
				    <div className="text-14-600">Solutions</div>
				    <div className="text-14-600">News</div>
				    <div className="text-14-600">Careers</div>
				    <div className="text-14-600">Contact</div>
				</div>

				<div id="footer-address-container">
				    <div>
				        <div className="text-14-600">Leesburg Branch</div>
				        <div className="text-14-400">
				            <div>161 Fort Evans Rd. STE 250</div>
				            <div>Leesburg, VA 20176 USA</div>
				        </div>
				    </div>
				    <div>
				        <div className="text-14-600">Sterling Branch</div>
				        <div className="text-14-400">
				            <div>21515 Ridgetop Circle, STE 390</div>
				            <div>Sterling, VA 20166 USA</div>
				        </div>
				    </div>
				    <div>
				        <div className="text-14-600">Reston Headquarters</div>
				        <div className="text-14-400">
				            <div>11601 Quail Ridge Court</div>
				            <div>Reston, VA 20194 USA</div>
				        </div>
				    </div>
				</div>


				<img id="footer-logo" src={logo} />



				<div id="footer-rights-container">
				    <div className="text-14-400">@Copyright Goldschmitt and Associates LLC ©</div>
				    <div className="text-14-400">All Rights Reserved.</div>
				</div>



				
			</div>	
	);
}
export { Footer }