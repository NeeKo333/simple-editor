import "./App.scss";
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

    const board = e.target as HTMLDivElement;
    if (board.className === "work-area") {
      board.style.backgroundColor = "rgba(129, 163, 196)";
    }

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
    const board = e.target as HTMLDivElement;
    board.style.backgroundColor = "rgba(129, 163, 196)";
  };

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const board = e.target as HTMLDivElement;
    if (board.className === "work-area") {
      board.style.backgroundColor = "rgba(129, 163, 196, 0.8)";
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
