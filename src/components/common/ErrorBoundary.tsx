 'use client';

  import { Component, ReactNode } from 'react';

  interface Props {
    children: ReactNode;
    fallback?: ReactNode;
  }

  interface State {
    hasError: boolean;
  }

  class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
      return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error('Uncaught error in ErrorBoundary:', error, errorInfo); // should remove console.error and log the error info using customised loggingservice before pushing to prod
    }

    render() {
      if (this.state.hasError) {
        return this.props.fallback || <h2>Something went wrong.</h2>; // can use some meaningful error message here
      }

      return this.props.children;
    }
  }

  export default ErrorBoundary;

  // this is basic error boundary component implementation, should implement custom error components based on use case and error type