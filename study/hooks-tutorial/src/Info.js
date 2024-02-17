import { useState, useEffect, useReducer } from 'react';
import useInputs from './useInput';

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   };
// }

// const Info = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     name: '',
//     nickname: ''
//   });
//   const { name, nickname } = state;
//   const onChange = (e) => {
//     dispatch(e.target);
//   };

//   return (
//     <div>
//       <div>
//         <input name="name" value={name} onChange={onChange}></input>
//         <input name="nickname" value={nickname} onChange={onChange}></input>
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Info = () => {
//   const [name, setName] = useState('');
//   const [nickname, setNickname] = useState('');

//   useEffect(() => {
//     console.log('마운트될 때만 실행됩니다');

//     return () => {
//       console.log('unmount')
//     }
//   }, []);

//   useEffect(() => {
//     console.log('값이 변경될 때 만 실행 : ', name);

//     return () => {
//       console.log('cleanup')
//       console.log(name)
//     }
//   }, [name]);

//   // useEffect(() => {
//   //   console.log('값이 변경될 때 만 실행 : ', name);
//   // }, [name]);

//   useEffect(() => {
//     console.log('렌더링이 완료되었습니다');
//     console.log({ name, nickname });
//   });

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName}></input>
//         <input value={nickname} onChange={onChangeNickname}></input>
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Info = () => {
//   const [name, setName] = useState('');
//   const [nickname, setNickname] = useState('');

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName}></input>
//         <input value={nickname} onChange={onChangeNickname}></input>
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Info;
