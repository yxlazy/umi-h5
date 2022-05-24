import styles from './demos.less';
const DemoBlock = (props: any) => {
  return <div className={styles.demos}>{props.children}</div>;
};

export default DemoBlock;
