export interface Todo {
  userId?: number;
  id: number;
  title: string;
  decs: string;
  startTime: string;
  endTime: string;
  tags: string[];
  completed: boolean;
}

export interface TodoFetched {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}
