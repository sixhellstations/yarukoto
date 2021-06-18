import { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { State } from 'redux/store';
import { setTodoList } from 'App.actions';
import reorder from 'utils/reorder';
import onDragEnd from 'utils/onDragEnd';
import TodoItem from 'components/TodoList/TodoItem/TodoItem';
import './TodoList.scss';

const TodoList = () => {
    const { todoList } = useSelector((state: State) => state, shallowEqual);
    const dispatch = useDispatch();

    const handleDragEnd = (result: DropResult) => {
        onDragEnd(result, () => dispatch(setTodoList(reorder(todoList, result.source.index, result.destination!.index))));
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="list">
                {(provided) => (
                    <ul className="todo-list" ref={provided.innerRef} {...provided.droppableProps}>
                        {todoList.map((todo, index) => (
                            <TodoItem key={todo.id} todo={todo} index={index} />
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default memo(TodoList);
