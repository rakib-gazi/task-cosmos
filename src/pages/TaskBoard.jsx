import React, { useState } from "react";
import { DndContext, closestCorners, DragOverlay } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import DraggableCard from "../components/DraggableCard";
import DroppableColumn from "../components/DroppableColumn";

const TaskBoard = () => {
  const [lists, setLists] = useState([
    { id: "todo", title: "To-Do", cards: ["Task 1", "Task 2"] },
    { id: "in-progress", title: "In Progress", cards: ["Task 3"] },
    { id: "done", title: "Done", cards: [] },
  ]);

  const [activeCard, setActiveCard] = useState(null);
  const [activeColumn, setActiveColumn] = useState(null);

  const onDragStart = (event) => {
    if (event.active.data.current?.type === "column") {
      const column = lists.find((list) => list.id === event.active.id);
      setActiveColumn(column);
    } else {
      setActiveCard(event.active.id);
    }
  };

  const onDragEnd = (event) => {
    setActiveCard(null);
    setActiveColumn(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // Handling column dragging
    const activeColumnIndex = lists.findIndex((list) => list.id === activeId);
    const overColumnIndex = lists.findIndex((list) => list.id === overId);

    if (activeColumnIndex !== -1 && overColumnIndex !== -1) {
      setLists(arrayMove(lists, activeColumnIndex, overColumnIndex));
      return;
    }

    // Handling card dragging
    let newLists = [...lists];
    let fromList, toList, movedCard;

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
          <SortableContext items={lists.map((list) => list.id)}>
            {lists.map((list) => (
              <DroppableColumn key={list.id} list={list}>
                <SortableContext items={list.cards} strategy={verticalListSortingStrategy}>
                  {list.cards.map((card) => (
                    <DraggableCard key={card} id={card} card={card} />
                  ))}
                </SortableContext>
              </DroppableColumn>
            ))}
          </SortableContext>
        </div>
      </div>

      {/* Drag Overlay for Cards and Columns */}
      <DragOverlay>
        {activeCard ? <DraggableCard id={activeCard} card={activeCard} isOverlay /> : null}
        {activeColumn ? (
          <div className="p-4 bg-gray-300 border-2 border-blue-500 rounded-lg shadow-lg scale-105">
            <h2 className="font-semibold text-xl">{activeColumn.title}</h2>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default TaskBoard;
