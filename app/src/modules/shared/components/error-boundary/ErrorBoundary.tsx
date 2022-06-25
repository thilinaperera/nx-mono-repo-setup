import React, { Component } from "react";
import "./error-boundary.sass";

interface Props {
  children?: JSX.Element | JSX.Element[];
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error">
          <img src="https://picsum.photos/200/300" alt="" />
          <h1>Something went wrong.</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
