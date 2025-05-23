import { createContext, useContext, useEffect, useState } from 'react';
import { initialData } from '../utils/data';
import { emitUpdate, onUpdate } from '../socket'; // Make sure the path is correct

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  // 🔁 Broadcast updates to other tabs
  useEffect(() => {
    emitUpdate(data);
  }, [data]);

  // 🔁 Listen for updates from other tabs
  useEffect(() => {
    onUpdate((incomingData) => {
      if (JSON.stringify(incomingData) !== JSON.stringify(data)) {
        setData(incomingData);
      }
    });
  }, []);

  return (
    <BoardContext.Provider value={{ data, setData }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);
