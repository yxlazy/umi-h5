import { ComponentType } from 'react';
import ErrorBoundary from './ErrorBoundary';

function withErrorBoundary(C: ComponentType): ComponentType {
  const Component = (props: any) => {
    return (
      <ErrorBoundary {...props}>
        <C {...props} />
      </ErrorBoundary>
    );
  };
  return Component;
}

export default withErrorBoundary;
