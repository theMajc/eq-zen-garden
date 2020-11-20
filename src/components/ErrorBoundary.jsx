import React from 'react';

// Simple logging, upgrade if needed.
const LOGGING = false;
const Logger = (...err) => {
	if (LOGGING === false){
		return null;
	}
	console.log(...err);
}

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: null
		};
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
			error: error
		};
	}

	componentDidCatch(error, info) {
		Logger(error, info.componentStack);
	}

	render() {
	  if (this.state.hasError) {
		return <h1>Something went wrong. {`${this.state.error.message}`}</h1>;
	  }
	  return this.props.children;
	}
}

export default ErrorBoundary;