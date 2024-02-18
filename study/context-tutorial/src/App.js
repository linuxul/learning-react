import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColoBox';
import { ColorProvider } from './contexts/color';
import SelectColor from './components/SelectColor';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColor></SelectColor>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
  );
}

// function App() {
//   return (
//     <ColorProvider>
//       <div>
//         <ColorBox></ColorBox>
//       </div>
//     </ColorProvider>
//   );
// }

// function App() {
//   return (
//     <ColorContext.Provider value={{ color: 'green'}}>
//       <div>
//         <ColorBox></ColorBox>
//       </div>
//     </ColorContext.Provider>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ColorBox></ColorBox>
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
