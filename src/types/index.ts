export interface Todo extends TodoFetched {
  decs: string;
  startTime: string;
  endTime: string;
  tags: string[];
}

export interface TodoFetched {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}
