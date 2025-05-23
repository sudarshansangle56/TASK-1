// Default structure for columns and tasks
export const initialData = {
    tasks: {
      'task-1': {
        id: 'task-1',
        title: 'Implement login page',
        description: 'Use React and Firebase Auth',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      'task-2': {
        id: 'task-2',
        title: 'Set up database schema',
        description: 'Create collections for users and tasks',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      'task-3': {
        id: 'task-3',
        title: 'Integrate API with frontend',
        description: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      'task-4': {
        id: 'task-4',
        title: 'Design wireframes',
        description: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    },
    columns: {
      'todo': {
        id: 'todo',
        title: 'To Do',
        taskIds: ['task-1', 'task-2'],
      },
      'in-progress': {
        id: 'in-progress',
        title: 'In Progress',
        taskIds: ['task-3'],
      },
      'done': {
        id: 'done',
        title: 'Done',
        taskIds: ['task-4'],
      },
    },
    columnOrder: ['todo', 'in-progress', 'done'],
  };
  