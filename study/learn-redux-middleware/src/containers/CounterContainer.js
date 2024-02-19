import { connect } from 'react-redux';
import { increase, decrease, increaseAsync, decreaseAsync } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  console.log('#1 number : ', number)

  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    ></Counter>
  );
};

export default connect(
  (state) => ({
    number: state.counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(CounterContainer);

// const CounterContainer = ({ number, increase, decrease }) => {
//   console.log('#1 number : ', number)

//   return (
//     <Counter
//       number={number}
//       onIncrease={increase}
//       onDecrease={decrease}
//     ></Counter>
//   );
// };

// export default connect(
//   (state) => ({
//     number: state.counter
//   }),
//   {
//     increase,
//     decrease
//   }
// )(CounterContainer);
