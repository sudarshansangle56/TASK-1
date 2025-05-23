import React from 'react';
import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { BoardProvider, useBoard } from './context/BoardContext';
import Column from './components/Column';
import TaskForm from './components/TaskForm';
import Navbar from './components/Navbar';

function InnerApp() {
  const { data, setData } = useBoard();

  const handleDrag = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const fromColumn = data.columns[source.droppableId];
    const toColumn = data.columns[destination.droppableId];
    const taskIds = [...fromColumn.taskIds];
    const [taskId] = taskIds.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      taskIds.splice(destination.index, 0, taskId);
      const updatedColumn = { ...fromColumn, taskIds };
      setData(prev => ({
        ...prev,
        columns: {
          ...prev.columns,
          [updatedColumn.id]: updatedColumn,
        },
      }));
    } else {
      const toTaskIds = [...toColumn.taskIds];
      toTaskIds.splice(destination.index, 0, taskId);

      setData(prev => ({
        ...prev,
        columns: {
          ...prev.columns,
          [fromColumn.id]: { ...fromColumn, taskIds },
          [toColumn.id]: { ...toColumn, taskIds: toTaskIds },
        },
      }));
    }
  };

  const add = ({ title, description }) => {
    const id = `task-${Date.now()}`;
    const task = {
      id,
      title,
      description,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setData(prev => ({
      ...prev,
      tasks: { ...prev.tasks, [id]: task },
      columns: {
        ...prev.columns,
        todo: {
          ...prev.columns.todo,
          taskIds: [...prev.columns.todo.taskIds, id],
        },
      },
    }));
  };

  const remove = (columnId, taskId) => {
    const tasks = { ...data.tasks };
    delete tasks[taskId];

    const updatedTaskIds = data.columns[columnId].taskIds.filter(id => id !== taskId);

    setData(prev => ({
      ...prev,
      tasks,
      columns: {
        ...prev.columns,
        [columnId]: {
          ...prev.columns[columnId],
          taskIds: updatedTaskIds,
        },
      },
    }));
  };

  return (
    <div className="app" style={{backgroundColor:'#111827', height:'700px'}}>
      <Navbar/>
      <h1 style={{color:'white'}}>Task Board</h1>
     
      <TaskForm onSubmit={add} />
      <DragDropContext onDragEnd={handleDrag}>
        <div className="columns">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map(id => data.tasks[id]);
            return (
              <Column
                key={columnId}
                column={column}
                tasks={tasks}
                onDeleteTask={remove}
              />
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}

export default function App() {
  return (
    <BoardProvider>

      <InnerApp />
    </BoardProvider>
  );
}
