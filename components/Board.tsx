'use client'
import React, { useEffect } from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import { useBoardStore } from '@/store/BoardStore';
function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [getBoard])







  return (
    <h1>hello</h1>
    // <DragDropContext>
    //     <Droppable droppableId='board' direction='horizontal' type='column'>
    //         {(provided) => <div>
    //             {
    //                 /**render all the colums */
    //             }
    //         </div>} 


    //     </Droppable>
    // </DragDropContext>
  )
}

export default Board