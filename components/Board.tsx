'use client'
import React, { useEffect } from 'react'
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd';
import { useBoardStore } from '@/store/BoardStore';
import Column from './Column';

function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard])

  const handleOnDragEnd = (result: DropResult) => {};
  return (
    
    <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='board' direction='horizontal' type='column'>
            {(provided) => 
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto'
              {...provided.droppableProps}
              ref = {provided.innerRef}
                >
                  {
                    /**render all the colums */
                    Array.from(board.columns.entries()).map(([id, column], index) => (
                      <Column 
                        key={id}
                        id = {id}
                        todos={column.todos}
                        index={index}
                      />
                    ))
                }
            </div>} 


        </Droppable>
    </DragDropContext>
  )
}

export default Board