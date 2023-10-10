// App.js

import React, { useState } from "react";
import validator from 'validator'

const App = () => {
	const [message, setMessage] = useState('')
	const validateCreditCard = (value) => {
		if (validator.isCreditCard(value)) {
			setMessage('Bu bir gerçek kredi kartı numarası!')
			// Example credit card: 8171999900000000021
		}
		else {
			setMessage('Gerçek kredi kartı numarasını giriniz...')
		}
	}
	return (
	<div style={{
		marginLeft: '200px',
		}}>
			<pre>
				<h2>ReactJS'de Kredi Kartını Doğrulama</h2>
				<span>Enter CreditCard: </span>
				<input type="text"
				onChange={(e) => validateCreditCard(e.target.value)}>
				</input>
				<br />
				<span style={{
					fontWeight: 'bold',
					color: 'black',
				}}>{message}
				</span>
			</pre>
	</div>
	);
}
export default App
