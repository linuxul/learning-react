import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer></CounterContainer>
      <hr></hr>
      <TodoContainer></TodoContainer>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <Counter number={0}></Counter>
//       <hr></hr>
//       <Todos></Todos>
//     </div>
//   );
// };

export default App;
