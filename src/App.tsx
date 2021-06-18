import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { addTodo } from 'App.actions';
import TodoList from 'components/TodoList/TodoList';
import InputGroup from 'components/InputGroup/InputGroup';
import './App.scss';

const App = () => {
    const dispatch = useDispatch();

    const handleAddTodo = (text: string) => {
        dispatch(addTodo(text));
    };

    return (
        <Row>
            <Col lg={{ span: 12, offset: 6 }} sm={{ span: 16, offset: 4 }} xs={{ span: 22, offset: 1 }}>
                <div className="container">
                    <div className="content">
                        <h1 className="content__header">Какие планы на сегодня?</h1>
                        <div className="content__input">
                            <InputGroup
                                autoFocus
                                placeholder="Погулять с собакой..."
                                buttonText="Добавить"
                                action={handleAddTodo}
                                clearInputAfterAction
                            />
                        </div>
                        <TodoList />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default App;
