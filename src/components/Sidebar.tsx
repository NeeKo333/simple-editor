import React from "react";
import { ISidebar } from "../types/ISidebar";
import { ElementType } from "../types/ElementType";

const Sidebar: React.FC<ISidebar> = ({
  onDragStartHandler,
  onDragEndHandler,
}) => {
  const itemList: string[] = [ElementType.Text, ElementType.Image];
  return (
    <div className="sidebar">
      {itemList.map((el) => (
        <div
          key={el}
          onDragStart={() => onDragStartHandler(el)}
          onDragEnd={() => onDragEndHandler()}
          draggable={true}
          className="sidebar-item"
        >
          {el}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
