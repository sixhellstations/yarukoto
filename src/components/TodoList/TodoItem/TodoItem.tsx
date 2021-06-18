import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { CheckOutlined, EditOutlined } from '@ant-design/icons';
import { removeTodoById, updateTodoById } from 'App.actions';
import { TodoItemProps } from 'components/TodoList/TodoItem/TodoItem.types';
import Input from 'components/InputGroup/InputGroup';
import './TodoItem.scss';

const TodoItem = ({ todo, index }: TodoItemProps) => {
    const [isEdited, setIsEdited] = useState(false);
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTodoById(todo.id));
    };

    const handleEdit = () => {
        setIsEdited(true);
    };

    const handleUpdate = (text: string) => {
        dispatch(updateTodoById(todo.id, text));
        setIsEdited(false);
    };

    return (
        <Draggable draggableId={todo.id} index={index}>
            {(provided) => (
                <li className="todo-item__container" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {!isEdited ? (
                        <div className="todo-item">
                            <span className="todo-item__text">{todo.text}</span>
                            <div className="todo-item__buttons">
                                <button className="todo-item-buttons__button" type="button" onClick={handleRemove}>
                                    <CheckOutlined />
                                </button>
                                <button className="todo-item-buttons__button" type="button" onClick={handleEdit}>
                                    <EditOutlined />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <Input
                            autoFocus
                            placeholder={todo.text}
                            initialValue={todo.text}
                            buttonText="Изменить"
                            action={handleUpdate}
                            clearInputAfterAction
                        />
                    )}
                </li>
            )}
        </Draggable>
    );
};

export default memo(TodoItem);
