import Image from "./Image";
import { IWorkArea } from "../types/IWorkArea";
import { SidebarElements } from "../types/consts";

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
      {boardContent.length > 0
        ? boardContent.map((el, index) =>
            el.cardName === SidebarElements.Text ? (
              <textarea key={el.id} className="textarea-item"></textarea>
            ) : (
              <Image key={el.id}></Image>
            )
          )
        : "drag"}
    </div>
  );
};

export default WorkArea;
