import { faker } from "@faker-js/faker";
import { Todo, TodoFetched } from "types";
import { getRandomDate } from "./getRandomDate";
import { getRandomTags } from "./getRandomTags";


//function for adding additional info to todos array

export function formatTodos (arr:TodoFetched[]):Todo[] {
return arr.map((item) => {
    return {
      ...item,
      decs:faker.lorem.sentence({ min: 3, max: 10 }),
      startTime: getRandomDate(),
      endTime: getRandomDate(),
      tags: getRandomTags(),
    };
  })
}