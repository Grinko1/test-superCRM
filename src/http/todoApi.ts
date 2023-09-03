import { Todo, TodoFetched } from 'types';
import axios from 'axios';
import { formatTodos } from '../utills/formatTodos';

export const fetchTodos = async (page: number = 1) => {
  const limit = page * 10;
  const { data } = await axios.get<TodoFetched[]>(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`,
  );
  const mockedData: Todo[] = formatTodos(data)
  return mockedData;
};
