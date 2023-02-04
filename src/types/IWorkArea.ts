import { ICard } from "./ICard";

export interface IWorkArea {
  boardContent: ICard[];
  onDropHandler(e: React.DragEvent<HTMLDivElement>): void;
  onDragLeaveHandler(e: React.DragEvent<HTMLDivElement>): void;
  onDragOverHandler(e: React.DragEvent<HTMLDivElement>): void;
}
