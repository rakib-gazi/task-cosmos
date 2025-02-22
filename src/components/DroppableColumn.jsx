import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { motion } from "framer-motion";

const DroppableColumn = ({ list, children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: list.id,
  });

  return (
    <motion.div
      ref={setNodeRef}
      className={`p-4 rounded-lg transition-all duration-300 ${
        isOver ? "bg-blue-200 border-2 border-blue-500 scale-105" : "bg-gray-100"
      }`}
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="font-semibold text-xl">{list.title}</h2>
      <div className="mt-4">{children}</div>
      <div className="p-4 border rounded-md mb-2 cursor-pointer shadow-sm bg-white">
        hello
      </div>
    </motion.div>
  );
};

export default DroppableColumn;
