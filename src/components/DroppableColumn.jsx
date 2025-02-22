import React from "react";
import { useDroppable, useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";
import { Label, TextInput } from "flowbite-react";

const DroppableColumn = ({ list, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id: list.id });
  const { attributes, listeners, setNodeRef: setDraggableRef, isDragging } = useDraggable({
    id: list.id,
    data: { type: "column" },
  });

  return (
    <motion.div
      ref={(el) => {
        setNodeRef(el);
        setDraggableRef(el);
      }}
      {...listeners}
      {...attributes}
      className={`p-4 rounded-lg transition-all duration-300 cursor-grab ${
        isOver ? "bg-blue-200 border-2 border-blue-500 scale-105" : "bg-gray-100"
      } ${isDragging ? "bg-gray-300 opacity-70 scale-105 shadow-lg" : ""}`}
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="font-semibold text-xl">{list.title}</h2>
      <div className="mt-4">{children}</div>
      <div
        className="p-4 border rounded-md mb-2 cursor-pointer shadow-sm bg-white"
        onClick={() => document.getElementById(`${list.id}`).showModal()}
      >
        <button className="btn">Add card</button>
      </div>

      {/* Modal for input */}
      <dialog id={list.id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{list.title}</h3>
          <div className="py-4">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="title" type="text" placeholder="Input title" required />
          </div>
          <div className="py-4">
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <TextInput id="description" type="text" placeholder="Input description" required />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </motion.div>
  );
};

export default DroppableColumn;
