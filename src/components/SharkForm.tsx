import { useState } from "react";

type SharkFormProps = {
  addItem: (name: string, status: string) => void;
};

export default function SharkForm({addItem}: SharkFormProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("No Concern");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (name.trim().length === 0) {
          alert("Name cannot be empty");
        } else {
          addItem(name, status);
        }
        setName("");
        setStatus("No Concern");
      }}
    >
      <label htmlFor="shark">Shark Name</label>
      <input
        id="shark"
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value);
          // console.log(e.target.value)
        }}
      />
      <label htmlFor="endangered">Status</label>
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.currentTarget.value);
          // console.log(e.target.value)
        }}
        id="endangered"
      >
        <option value="no concern">No Concern</option>
        <option value="endangered">Endangered</option>
        <option value="extinct">Extinct</option>
      </select>
      <button>add shark</button>
    </form>
  );
}