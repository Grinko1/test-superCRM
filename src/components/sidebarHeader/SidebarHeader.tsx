import style from './SidebarHeader.module.scss';

interface SidebarHeaderProps {
  todosLength: number;
}
const SidebarHeader = ({ todosLength }: SidebarHeaderProps) => {
  return (
    <div className={style.SidebarHeader}>
      <span className={style.headerDay}>Today</span>
      <div className={style.headerActions}>
        <button>+</button>
        <div className={style.qtt}>{todosLength}</div>
      </div>
    </div>
  );
};

export default SidebarHeader;
