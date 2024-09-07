import { useDrag } from "react-dnd";
import EditIcon from "../icons/edit";

interface ElementProps {
  title: string;
  runbookSlug: string;
}

const Runbook = ({ title, runbookSlug }: ElementProps) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "RUNBOOK",
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
      item: { title, runbookSlug },
    }),
    []
  );

  return (
    <div ref={dragRef} className="card runbook-card" style={{ opacity }}>
      <EditIcon />
      <h3>{title}</h3>
    </div>
  );
};

export default Runbook;
