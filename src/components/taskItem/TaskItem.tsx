import BorderedBox from '../borderedbox/BorderedBox';
import { Todo } from 'types';
import style from './TaskItem.module.scss';
import { memo } from 'react';

interface TaskItemProps {
  todo: Todo;
  toggleCompete: (id: number) => void;
}
const TaskItem = memo(({ todo, toggleCompete }: TaskItemProps) => {
  return (
    <BorderedBox>
      <div className={style.TaskItem}>
        <div className={style.Title}>
          <input type='checkbox' checked={todo.completed} onChange={() => toggleCompete(todo.id)} />
          <span>{todo.title}</span>
        </div>
        <div className={style.Time}>
          <div>{todo.startTime}</div>
          <div>{todo.endTime}</div>
        </div>
        <div className={style.Desc}>{todo.decs}</div>
        <div className={style.Footer}>
          <div className={style.Tags}>
            {todo.tags &&
              todo.tags.map((tag) => (
                <div className={style.Tag} key={tag}>
                  {tag}
                </div>
              ))}
          </div>

          <div className={style.Avatar}>
            <img src='./assets/img.png' />
          </div>
        </div>
      </div>
    </BorderedBox>
  );
});

export default TaskItem;
