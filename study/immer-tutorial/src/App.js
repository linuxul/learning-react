import logo from './logo.svg';
import './App.css';
import { useRef, useCallback, useState } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
    );
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      setData(
        produce((draft) => {
          draft.array.push(info);
        })
      );

      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback((id) => {
    setData(
      produce((draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        ></input>
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        ></input>
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// const App = () => {
//   const nextId = useRef(1);
//   const [form, setForm] = useState({ name: '', username: '' });
//   const [data, setData] = useState({ array: [], uselessValue: null });

//   const onChange = useCallback(
//     (e) => {
//       const { name, value } = e.target;
//       setForm(
//         produce(form, (draft) => {
//           draft[name] = value;
//         })
//       );
//     },
//     [form]
//   );

//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       const info = {
//         id: nextId.current,
//         name: form.name,
//         username: form.username
//       };

//       setData(
//         produce(data, (draft) => {
//           draft.array.push(info);
//         })
//       );

//       setForm({
//         name: '',
//         username: ''
//       });
//       nextId.current += 1;
//     },
//     [data, form.name, form.username]
//   );

//   const onRemove = useCallback(
//     (id) => {
//       setData(
//         produce(data, (draft) => {
//           draft.array.splice(
//             draft.array.findIndex((info) => info.id === id),
//             1
//           );
//         })
//       );
//     },
//     [data]
//   );

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           name="username"
//           placeholder="아이디"
//           value={form.username}
//           onChange={onChange}
//         ></input>
//         <input
//           name="name"
//           placeholder="이름"
//           value={form.name}
//           onChange={onChange}
//         ></input>
//         <button type="submit">등록</button>
//       </form>
//       <div>
//         <ul>
//           {data.array.map((info) => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username} ({info.name})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const nextId = useRef(1);
//   const [form, setForm] = useState({ name: '', username: '' });
//   const [data, setData] = useState({ array: [], uselessValue: null });

//   const onChange = useCallback(
//     (e) => {
//       const { name, value } = e.target;
//       setForm({
//         ...form,
//         [name]: [value]
//       });
//     },
//     [form]
//   );

//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       const info = {
//         id: nextId.current,
//         name: form.name,
//         username: form.username
//       };

//       setData({
//         ...data,
//         array: data.array.concat(info)
//       });

//       setForm({
//         name: '',
//         username: ''
//       });
//       nextId.current += 1;
//     },
//     [data, form.name, form.username]
//   );

//   const onRemove = useCallback(
//     (id) => {
//       setData({
//         ...data,
//         array: data.array.filter((info) => info.id !== id)
//       });
//     },
//     [data]
//   );

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           name="username"
//           placeholder="아이디"
//           value={form.username}
//           onChange={onChange}
//         ></input>
//         <input
//           name="name"
//           placeholder="이름"
//           value={form.name}
//           onChange={onChange}
//         ></input>
//         <button type="submit">등록</button>
//       </form>
//       <div>
//         <ul>
//           {data.array.map((info) => (
//             <li key={info.id} onClick={() => onRemove(info.id)}>
//               {info.username} ({info.name})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

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
