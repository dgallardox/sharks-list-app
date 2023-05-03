import SharkItem from "../types/SharksItem";

// type is an array of sharkItems
type SharksListProps = {
  sharks: SharkItem[];
  deleteItem: (name: string) => void
};

// parameter is of type array of sharkItems
export default function SharksList({ sharks, deleteItem }: SharksListProps) {
  return (
    <ul>
      {sharks.map((shark) => (
        <li
          onClick={(e) => {
            e.preventDefault()
            deleteItem(shark.name)
          }}
          key={shark.id}>{shark.name} : <p>{ shark.status}</p></li>
      ))}
    </ul>
  );
}
