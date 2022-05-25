import { SpinLoading } from 'antd-mobile';
import styles from './loading.less';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <SpinLoading />
    </div>
  );
};

export default Loading;
