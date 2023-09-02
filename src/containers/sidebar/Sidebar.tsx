import { TaskList } from '../../components/taskList';
import { memo, useCallback, useEffect, useState } from 'react';
import { fetchTodos } from '../../http/todoApi';
import SidebarHeader from '../../components/sidebarHeader/SidebarHeader';
import SidebarLayout from '../../components/sidebarLayout/SidebarLayout';

const Sidebar = memo(() => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchTodos(page).then((data) => {
      setTodos(data);
      setLoading(false);
    });
  }, [page]);

  const toggleComplete = useCallback(
    (id: number) => {
      const changedArr = todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      setTodos(changedArr);
    },
    [todos],
  );

  return (
    <SidebarLayout>
      <SidebarHeader todosLength={todos.length} />
      <TaskList
        todos={todos}
        loading={loading}
        page={page}
        setPage={setPage}
        toggleComplete={toggleComplete}
      />
    </SidebarLayout>
  );
});

export default Sidebar;
