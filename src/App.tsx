import "./App.css";
import Sidebar from "./components/Sidebar";
import WorkArea from "./components/WorkArea";
import { ICard } from "./types/ICard";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [currentCard, setCurrentCard] = useState<ICard>({});
  const [boardContent, setBoardContent] = useState<ICard[]>([]);

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setBoardContent([...boardContent, currentCard]);
  };

  const onDragStartHandler = (item: string) => {
    const card: ICard = {
      id: uuidv4(),
      cardName: item,
    };
    setCurrentCard(card);
  };

  const onDragEndHandler = () => {
    setCurrentCard({});
  };

  const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const element = e.target as HTMLDivElement;
    element.style.boxShadow = "";
  };

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const element = e.target as HTMLDivElement;
    if (element.className === "work-area") {
      element.style.boxShadow = "0px 2px 3px grey";
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar
          onDragStartHandler={onDragStartHandler}
          onDragEndHandler={onDragEndHandler}
        />
        <WorkArea
          onDropHandler={onDropHandler}
          onDragLeaveHandler={onDragLeaveHandler}
          onDragOverHandler={onDragOverHandler}
          boardContent={boardContent}
        />
      </div>
    </div>
  );
}

export default App;
