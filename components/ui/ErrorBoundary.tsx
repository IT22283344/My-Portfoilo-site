"use client";

import * as Sentry from "@sentry/nextjs";
import React from "react";

type Props = {
  children: React.ReactNode;
  /** Rendered instead of `children` after a render error. */
  fallback: (retry: () => void) => React.ReactNode;
  /** Label used in the Sentry breadcrumb so failures are attributable. */
  name?: string;
};

type State = { hasError: boolean; resetKey: number };

/**
 * Error boundaries have to be class components — there is no hook equivalent.
 * Failures are reported to Sentry rather than swallowed, and `retry` remounts
 * the subtree so a transient failure (e.g. a lost WebGL context) can recover.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, resetKey: 0 };

  static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    Sentry.captureException(error, {
      tags: { boundary: this.props.name ?? "unnamed" },
      extra: { componentStack: info.componentStack },
    });
  }

  retry = () => {
    this.setState((s) => ({ hasError: false, resetKey: s.resetKey + 1 }));
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback(this.retry);
    }
    return (
      <React.Fragment key={this.state.resetKey}>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default ErrorBoundary;
