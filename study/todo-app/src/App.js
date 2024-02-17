import logo from './logo.svg';
import './App.css';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import { useReducer, useState, useRef, useCallback } from 'react';

function createBulkTodos() {
  const array = [];
  for (let index = 1; index <= 2500; index++) {
    array.push({
      id: index,
      text: `할일 ${index}`,
      checked: false
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos());
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    // setTodos((todos) => todos.concat(todo));
    dispatch({ type: 'INSERT', todo})
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    dispatch({ type: 'REMOVE', id})
  }, []);

  const onToggle = useCallback((id) => {
    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );
    dispatch({ type: 'TOGGLE', id})
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoList>
    </TodoTemplate>
  );
};

// const App = () => {
//   const [todos, setTodos] = useState(createBulkTodos());
//   const nextId = useRef(2501);

//   const onInsert = useCallback(
//     (text) => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false
//       };
//       setTodos(todos.concat(todo));
//       nextId.current += 1;
//     },
//     [todos]
//   );

//   const onRemove = useCallback(
//     (id) => {
//       setTodos(todos.filter((todo) => todo.id !== id));
//     },
//     [todos]
//   );

//   const onToggle = useCallback(
//     (id) => {
//       setTodos(
//         todos.map((todo) =>
//           todo.id === id ? { ...todo, checked: !todo.checked } : todo
//         )
//       );
//     },
//     [todos]
//   );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert}></TodoInsert>
//       <TodoList
//         todos={todos}
//         onRemove={onRemove}
//         onToggle={onToggle}
//       ></TodoList>
//     </TodoTemplate>
//   );
// };

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: '리액트의 기초 알아보기',
//       checked: true
//     },
//     {
//       id: 2,
//       text: '컴포넌트 스타일링해 보기',
//       checked: true
//     },
//     {
//       id: 3,
//       text: '일정 관리 앱 만들어 보기',
//       checked: false
//     }
//   ]);

//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     (text) => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false
//       };
//       setTodos(todos.concat(todo));
//       nextId.current += 1;
//     },
//     [todos]
//   );

//   const onRemove = useCallback(
//     (id) => {
//       setTodos(todos.filter((todo) => todo.id !== id));
//     },
//     [todos]
//   );

//   const onToggle = useCallback(
//     (id) => {
//       setTodos(
//         todos.map((todo) =>
//           todo.id === id ? { ...todo, checked: !todo.checked } : todo
//         )
//       );
//     },
//     [todos]
//   );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert}></TodoInsert>
//       <TodoList
//         todos={todos}
//         onRemove={onRemove}
//         onToggle={onToggle}
//       ></TodoList>
//     </TodoTemplate>
//   );
// };

// const App = () => {
//   return (
//     <TodoTemplate>Todo App을 만들자!</TodoTemplate>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
