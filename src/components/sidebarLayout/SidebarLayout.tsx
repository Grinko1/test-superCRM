import { ReactNode } from 'react';
import style from './SidebarLayout.module.scss';

interface SidebarLayoutProps {
  children: ReactNode;
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return <div className={style.SidebarLayout}>{children}</div>;
};

export default SidebarLayout;
