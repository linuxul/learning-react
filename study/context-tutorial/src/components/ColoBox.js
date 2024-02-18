import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: state.color
            }}
          ></div>
          <div
            style={{
              width: '32px',
              height: '32px',
              background: state.subColor
            }}
          ></div>
        </>
      )}
    </ColorConsumer>
  );
};

// const ColorBox = () => {
//   return (
//     <ColorConsumer>
//       {(value) => (
//         <>
//           <div
//             style={{
//               width: '64px',
//               height: '64px',
//               background: value.state.color
//             }}
//           ></div>
//           <div
//             style={{
//               width: '64px',
//               height: '64px',
//               background: value.state.subColor
//             }}
//           ></div>
//         </>
//       )}
//     </ColorConsumer>
//   );
// };

// import ColorContext from '../contexts/color';

// const ColorBox = () => {
//   return (
//     <ColorContext.Consumer>
//       {(value) => (
//         <div
//           style={{
//             width: '64px',
//             height: '64px',
//             background: value.color
//           }}
//         ></div>
//       )}
//     </ColorContext.Consumer>
//   );
// };

export default ColorBox;
