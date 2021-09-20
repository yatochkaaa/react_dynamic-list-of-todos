import React from 'react';
import './TodoList.scss';
import cn from 'classnames';

interface Props {
  todos: Todo[];
  setSelectedUserId: (userId: number) => void;
}

export const TodoList: React.FC<Props> = (props) => {
  const { todos, setSelectedUserId } = props;

  return (
    <div className="TodoList">
      <h2>Todos:</h2>

      <div className="TodoList__list-container">
        <ul className="TodoList__list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={cn(
                'TodoList__item', {
                  'TodoList__item--unchecked': !todo.completed,
                  'TodoList__item--checked': todo.completed,
                },
              )}
            >
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                />
                <p>{todo.title}</p>
              </label>

              <button
                type="button"
                onClick={() => {
                  setSelectedUserId(todo.userId);
                }}
                className="
                  TodoList__user-button
                  TodoList__user-button--selected
                  button
                "
              >
                {`User id: ${todo.userId}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
