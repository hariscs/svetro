import React from 'react';

const Button = ({ children, btnType }) => {
	return (
		<a href='https://calendly.com/svetro-meetings/15-minutes-expert-session' className={`btn ${btnType}`}>
			{children}
		</a>
	);
};

export default Button;
