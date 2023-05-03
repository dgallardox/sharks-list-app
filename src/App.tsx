import SharksList from "./components/SharkList";
import SharkForm from "./components/SharkForm";
import { useEffect, useState } from "react";
import SharkItem from "./types/SharksItem";

const initialItems: SharkItem[] = localStorage.items ? JSON.parse(localStorage.items) : [
  {
    id: 0,
    name: "Great White Shark",
    status: "endangered",
  },
  {
    id: 1,
    name: "Hammerhead Shark",
    status: "engangered",
  },
  {
    id: 2,
    name: "Megalodon Shark",
    status: "extinct",
  },
];

function App() {
  const [sharks, setSharks] = useState<SharkItem[]>(initialItems);

  useEffect(() => {
    localStorage.items = JSON.stringify(sharks)
  }, [sharks])

  const addItem = (name: string, status: string) => {
      setSharks((prev) => [...prev, {
          id: Date.now(),
          name,
          status,
      }])
  }

const deleteItem = (name: string) => {
  setSharks((prev) => prev.filter((shark) => shark.name !== name));
};

  return (
    <div className="container">
      <h1>Shark Log</h1>
      <p>Today is: {new Date().toLocaleDateString()}</p>
      <SharkForm addItem={addItem} />
      <SharksList sharks={sharks} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
