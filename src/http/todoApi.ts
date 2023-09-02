import { Todo, TodoFetched } from 'types';
import axios from 'axios';
import { getRandomDate } from '../utills/getRandomDate';
import { faker } from '@faker-js/faker';
import { getRandomTags } from '../utills/getRandomTags';

export const fetchTodos = async (page: number = 1) => {
  const limit = page * 10;
  const { data } = await axios.get<TodoFetched[]>(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`,
  );
  const mockedData: Todo[] = data.map((item) => {
    return {
      ...item,
      decs: faker.lorem.sentence({ min: 3, max: 10 }),
      startTime: getRandomDate(),
      endTime: getRandomDate(),
      tags: getRandomTags(),
    };
  });
  return mockedData;
};
