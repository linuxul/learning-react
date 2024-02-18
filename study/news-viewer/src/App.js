import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  console.log('start App')

  return (
    <>
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
};

// const App = () => {
//   return (
//     <>
//       <Categories></Categories>
//       <NewsList></NewsList>
//     </>
//   );
// };

// const App = () => {
//   return <NewsList></NewsList>;
// };

// function App() {
//   const [data, setData] = useState(null);

//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=2cbd90bd1f4c442dbf4cbc42727c4807'
//       );
//       console.log(response);
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         ></textarea>
//       )}
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState(null);

//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/todos/1'
//       );
//       console.log(response);
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         ></textarea>
//       )}
//     </div>
//   );
// }

// function App() {
//   const [data, setData] = useState(null);

//   const onClick = () => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos/1')
//       .then((response) => {
//         console.log(response)
//         setData(response.data);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>블러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         ></textarea>
//       )}
//     </div>
//   );
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
