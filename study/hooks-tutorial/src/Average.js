import { useState, useMemo, useCallback, useRef } from 'react';


const getAverate = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null)

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 랜터링될 때마 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputEl.current.focus()
  }, [number, list]); // number, list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverate(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}></input>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};


// const getAverate = (numbers) => {
//   console.log('평균값 계산 중..');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = useCallback((e) => {
//     setNumber(e.target.value);
//   }, []); // 컴포넌트가 처음 랜터링될 때마 함수 생성

//   const onInsert = useCallback(() => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber('');
//   }, [number, list]); // number, list가 바뀌었을 때만 함수 생성

//   const avg = useMemo(() => getAverate(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange}></input>
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값:</b> {avg}
//       </div>
//     </div>
//   );
// };

// const getAverate = (numbers) => {
//   console.log('평균값 계산 중..');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = (e) => {
//     setNumber(e.target.value);
//   };

//   const onInsert = () => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber('');
//   };

//   const avg = useMemo(() => getAverate(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange}></input>
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값:</b> {avg}
//       </div>
//     </div>
//   );
// };

// const getAverate = (numbers) => {
//   console.log('평균값 계산 중..');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = (e) => {
//     setNumber(e.target.value);
//   };

//   const onInsert = () => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber('');
//   };

//   return (
//     <div>
//       <input value={number} onChange={onChange}></input>
//       <button onClick={onInsert}>등록</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값:</b> {getAverate(list)}
//       </div>
//     </div>
//   );
// };

export default Average;
