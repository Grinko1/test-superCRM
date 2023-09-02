import { Todo } from 'types';
import { TaskItem } from '../taskItem';
import { memo, useEffect, useRef } from 'react';


interface TaskListProps {
  todos: Todo[];
  loading: boolean;
  page: number;
  setPage: (page: number) => void;
  toggleComplete:(id:number) =>void;
}

const TaskList = memo((props: TaskListProps) => {
  const { todos, loading, page, setPage, toggleComplete } = props

  const lastElement = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    const cb: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting && page < 20) {
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(cb);
    if (lastElement.current) {
      observer.current.observe(lastElement.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, lastElement, page]);



  return (
    <div>
      {todos.map((todo) => (
        <TaskItem todo={todo} key={todo.id}  toggleComplete={toggleComplete}/>
      ))}
      <div ref={lastElement}></div>
    </div>
  );
});

export default TaskList;
