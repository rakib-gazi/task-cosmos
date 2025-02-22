import React, { useState } from "react";
import { DndContext, closestCorners, DragOverlay } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import DraggableCard from "../components/DraggableCard";
import DroppableColumn from "../components/DroppableColumn";

const TaskBoard = () => {
  const [lists, setLists] = useState([
    { id: 1, title: "To-Do", cards: ["Task 1", "Task 2"] },
    { id: 2, title: "In Progress", cards: ["Task 3"] },
    { id: 3, title: "Done", cards: [] },
  ]);

  const [activeCard, setActiveCard] = useState(null); // Stores the dragged card

  const onDragStart = (event) => {
    setActiveCard(event.active.id); // Store the dragged card
  };

  const onDragEnd = (event) => {
    setActiveCard(null); // Clear active card after drop
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    let newLists = [...lists];
    let fromList, toList;
    let movedCard;

    newLists.forEach((list) => {
      if (list.cards.includes(activeId)) {
        fromList = list;
        movedCard = activeId;
      }
      if (list.id === overId) {
        toList = list;
      }
    });

    if (fromList && toList) {
      fromList.cards = fromList.cards.filter((card) => card !== movedCard);
      toList.cards.push(movedCard);
      setLists([...newLists]);
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div className="container mx-auto bg-white">
        <h1 className="mt-24 font-bold text-3xl text-center">Task Board</h1>
        <div className="divider divider-neutral"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-12">
          {lists.map((list) => (
            <DroppableColumn key={list.id} list={list}>
              <SortableContext items={list.cards} strategy={verticalListSortingStrategy}>
                {list.cards.map((card, index) => (
                  <DraggableCard key={card} id={card} card={card} />
                ))}
              </SortableContext>
            </DroppableColumn>
          ))}
        </div>
      </div>

      {/* Drag Overlay */}
      <DragOverlay>
        {activeCard ? <DraggableCard id={activeCard} card={activeCard} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default TaskBoard;
