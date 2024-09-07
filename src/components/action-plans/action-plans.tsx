import { useState } from "react";
import { useDrop } from "react-dnd";

interface CardProps {
  runbookSlug: string;
  title: string;
}

const ActionPlans = () => {
  const [droppedRunbooks, setDroppedRunbooks] = useState<CardProps[]>([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: "RUNBOOK",
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop(item) {
      const runbookSlug = (item as CardProps).runbookSlug;
      const title = (item as CardProps).title;

      setDroppedRunbooks((prev) => [
        ...prev,
        {
          runbookSlug,
          title,
        },
      ]);
    },
  }));

  return (
    <div
      ref={drop}
      className="cardsColumn"
      role={"ActionPlans"}
      style={{ backgroundColor: isOver ? "red" : "grey" }}
    >
      <h2>Action Plans</h2>

      <div>
        {droppedRunbooks.map((runbook) => (
          <h3>{runbook.title}</h3>
        ))}
      </div>

      {canDrop && "Release to drop"}
    </div>
  );
};

export default ActionPlans;
