import React from 'react'
import '../../assets/Button.css'

const Button = (props) => {
	const {onClick, children} = props;

	return (
		<button className='styled-btn' onClick={onClick}>
			{children}
		</button>
	)
}

export default Button