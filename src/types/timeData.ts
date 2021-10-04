interface Task {
  task_id: string;
  start: number;
  duration: number;
}

export interface TimeData {
  tasks: Task[];
}
