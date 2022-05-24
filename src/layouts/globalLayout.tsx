import { IRouteComponentProps } from 'umi';
import 'antd-mobile/es/global';

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return children;
}
