import { useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    ></Counter>
  );
};

// const CounterContainer = () => {
//   const number = useSelector((state) => state.counter.number);
//   const dispatch = useDispatch();
//   return (
//     <Counter
//       number={number}
//       onIncrease={() => dispatch(increase())}
//       onDecrease={() => dispatch(decrease())}
//     ></Counter>
//   );
// };

export default CounterContainer;

// const CounterContainer = ({ number, increase, decrease }) => {
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
//     number: state.counter.number
//   }),
//   {
//     increase,
//     decrease
//   }
// )(CounterContainer);

// export default connect(
//   (state) => ({
//     number: state.counter.number
//   }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease
//       },
//       dispatch
//     )
// )(CounterContainer);

// export default connect(
//   (state) => ({
//     number: state.counter.number
//   }),
//   (dispatch) => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease())
//   })
// )(CounterContainer);

// const mapStateToProps = (state) => ({
//   number: state.counter.number
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     console.log('increate #1');
//     dispatch(increase())
//   },
//   decrease: () => {
//     console.log('decrease #1');
//     dispatch(decrease())
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
