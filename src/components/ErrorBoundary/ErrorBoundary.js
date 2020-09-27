import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      console.log(this.state)
      if (this.state.errorInfo) {
        return <h2>{this.state.error.message}</h2>
      }
      // Normally, just render children
      return this.props.children;
    }  
  }

export default ErrorBoundary;
