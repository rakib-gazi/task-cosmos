import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";

const DraggableCard = ({ id, card, isOverlay = false }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <motion.div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={isOverlay ? {} : style} 
      className={`p-4 border rounded-md mb-2 cursor-pointer shadow-sm ${
        isOverlay ? "bg-gray-300 opacity-70 scale-105" : "bg-white"
      }`}
      initial={{ scale: 1 }}
      animate={{ scale: isOverlay ? 1.05 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {card}
    </motion.div>
  );
};

export default DraggableCard;
