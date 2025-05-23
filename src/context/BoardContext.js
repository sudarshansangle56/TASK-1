import { createContext, useContext, useEffect, useState } from 'react';
import { initialData } from '../utils/data';
import { emitUpdate, onUpdate } from '../socket';

const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    emitUpdate(data);
  }, [data]);

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
