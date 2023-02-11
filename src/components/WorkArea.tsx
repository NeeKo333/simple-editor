import Image from "./Image";
import { IWorkArea } from "../types/IWorkArea";
import { ElementType } from "../types/ElementType";

const WorkArea: React.FC<IWorkArea> = ({
  boardContent,
  onDropHandler,
  onDragLeaveHandler,
  onDragOverHandler,
}) => {
  return (
    <div
      className="work-area"
      onDrop={(e) => onDropHandler(e)}
      onDragLeave={(e) => onDragLeaveHandler(e)}
      onDragOver={(e) => onDragOverHandler(e)}
    >
      {boardContent.length > 0 ? (
        boardContent.map((el) =>
          el.cardName === ElementType.Text ? (
            <textarea key={el.id} className="textarea-item"></textarea>
          ) : (
            <Image key={el.id}></Image>
          )
        )
      ) : (
        <h1>Drag something</h1>
      )}
    </div>
  );
};

export default WorkArea;
