import { h, Component } from 'preact';
import style from './style';

export default class Todo extends Component {
  constructor() {
    super();
    this.tasks = [
      { id: 1, name: 'Buy a cup of coffee', done: true },
      { id: 2, name: 'Crate a preact sample', done: false },
      { id: 3, name: 'Go home', done: false }
    ];
  }

  render({}, {}) {
    const tasks = this.tasks;

    return (
      <div class={style.todo}>
        <h1>Todo</h1>
        { tasks.length ? (
          <ul>
            { tasks.map(todo => (
              <li>
                <input type="checkbox" checked={todo.done} />
                {todo.name}
              </li>
            )) }
          </ul>
        ) : null }
      </div>
    );
  }
}
