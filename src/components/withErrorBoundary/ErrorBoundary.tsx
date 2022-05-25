import { ErrorBlock, Space } from 'antd-mobile';
import { PureComponent } from 'react';
import styles from './errorBoundary.less';

class ErrorBoundary extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, errorInfo: any) {
    const {
      location: { pathname },
    } = this.props;
    const info = { error, errorInfo, pathname };
    // 在这里将错误上报
    // this.setState({info})
    console.log(pathname);

    console.log(error?.toString());

    console.log(errorInfo.componentStack);
  }

  static getDerivedStateFromError(error: any) {
    // 在这里处理备用UI渲染
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundary}>
          <Space block direction="vertical">
            <ErrorBlock status="default" />
          </Space>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
