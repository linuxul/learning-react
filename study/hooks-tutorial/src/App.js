import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Info from './Info';
import { useState } from 'react';
import Average from './Average';
import MyComponent from './MyComponent';

const App = () => {
  return <Info></Info>
}

// const App = () => {
//   return <MyComponent></MyComponent>
// }

// const App = () => {
//   return <Average></Average>
// }

// const App = () => {
//   return <Info></Info>
// }

// const App = () => {
//   return <Counter></Counter>
// }

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {' '}
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr></hr>
//       {visible && <Info></Info>}
//     </div>
//   );
// };

// const App = () => {
//   return <Info></Info>
// }

// const App = () => {
//   return <Counter></Counter>
// }

export default App;
