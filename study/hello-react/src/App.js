import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPracticeFunc from './EventPracticeFunc';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <IterationSample></IterationSample>
//     )
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)}></ScrollBox>
//         <botton
//           onClick={() => {
//             this.scrollBox.scrollToBottom();
//           }}
//         >
//           맨 밑으로
//         </botton>
//       </div>
//     );
//   }
// }

// const App = () => {
//   return <ValidationSample></ValidationSample>
// };

// const App = () => {
//   return <EventPracticeFunc></EventPracticeFunc>
// };

// const App = () => {
//   return <EventPractice></EventPractice>;
// };

// const App = () => {
//   return <Say></Say>
// };

// const App = () => {
//   return <Counter></Counter>
// };

// const App = () => {
//   return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>;
// };

// const App = () => {
//   return <MyComponent name="React">리액트</MyComponent>;
// };

// const App = () => {
//   return <MyComponent name="React"></MyComponent>
// }

// const App = () => {
//   return <MyComponent></MyComponent>
// }

// class App extends Component {
//   render() {
//     const name = 'react'
//     return <div className='react'>{name}</div>
//   }
// }

// function App() {
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

// function App() {
//   const name = '리액트';
//   return (
//     <>
//       {/*  */}
//       <div
//         className="react" // 주석
//       >
//         {name}
//       </div>
//       <input />
//     </>
//   );
// }

// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input />
//     </>
//   );
// }

// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input></input>
//     </>
//   );
// }

// function App() {
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

// function App() {
//   const name = '리액트'
//   return (
//     <div style={{
//       backgroundColor: 'black',
//       color: 'aqua',
//       fontSize: '48px',
//       fontWeight: 'bold',
//       padding: 6
//     }}
//     >{name}</div>
//   )

// }

// function App() {
//   const name = '리액트';
//   const style = {
//     backgroundColor: 'black',
//     color: 'aqua',
//     fontSize: '48px',
//     fontWeight: 'bold',
//     padding: 16
//   }

//   return <div style={style}>{name}</div>
// }

// function App() {
//   const name = undefined;
//   return <div>{name || '리액트'}</div>;
// }

// function App() {
//   const name = undefined
//   return name || '값이 undefined입니다.';
// }

// function App() {
//   const name = undefined
//   return name;
// }

// function App() {
//   const number = 2
//   return <div>{number && <h1>리액트입니다.</h1>}</div>;
// }

// function App() {
//   const number = 0
//   return <div>{number && <h1>리액트입니다.</h1>}</div>;
// }

// function App() {
//   const name = '리액트';
//   return <div>{name === '리액트' && <h1>리액트입니다.</h1>}</div>;
// }

// function App() {
//   const name = '리액트1';
//   return (
//     <div>
//       {name === '리액트' ? <h1>리액트입니다.</h1> : null }
//     </div>
//   );
// }

// function App() {
//   const name = '리액트1';
//   return (
//     <div>
//       {name === '리액트' ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
//     </div>
//   );
// }

// function App() {
//   const name = '리액트'
//   return (
//     <>
//       <h1>리액트 안녕!</h1>
//       <h2>{name}, 잘 동작하니?</h2>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 동작하니? #</h2>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo"></img>
//         <p>
//           Edit <code>src/App.js</code> and save to reload. #
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

// export default App;

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
