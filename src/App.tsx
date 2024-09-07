import "./App.css";
import ActionPlans from "./components/action-plans/action-plans";
import Runbook from "./components/runbook/runbook";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className="mainContainer">
        <div className="cardsColumn">
          <h2>Runbooks</h2>

          <Runbook title="Execute hello.sh" runbookSlug="executeShFile" />

          <Runbook title="Run hello.go" runbookSlug="executeGoFile" />

          <Runbook title="Create react app" runbookSlug="createReactApp" />
        </div>

        <ActionPlans />
      </main>
    </DndProvider>
  );
}

export default App;
