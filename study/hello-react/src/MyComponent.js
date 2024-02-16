import PropTypes from 'prop-types';
import { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

// class MyComponent extends Component {
//   static propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
//   };

//   static defaultProps = {
//     name: '기본 이름'
//   };

//   render() {
//     const { name, favoriteNumber, children } = this.props;
//     return (
//       <div>
//         안녕하세요. 제이름은 {name}입니다.
//         <br />
//         children 값은 {children}입니다.
//         <br />
//         제가 좋아하는 숫자는 {favoriteNumber}입니다.
//       </div>
//     );
//   }
// }

// class MyComponent extends Component {
//   render() {
//     const { name, favoriteNumber, children } = this.props;
//     return (
//       <div>
//         안녕하세요. 제이름은 {name}입니다.
//         <br />
//         children 값은 {children}입니다.
//         <br />
//         제가 좋아하는 숫자는 {favoriteNumber}입니다.
//       </div>
//     );
//   }
// }

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

// MyComponent.defaultProps = {
//   name: '기본 이름'
// };

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요. 제이름은 {name}입니다.
//       <br />
//       children 값은 {children}입니다.
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired
// };

// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       안녕하세요. 제이름은 {name}입니다.
//       <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요. 제이름은 {name}입니다.
//       <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// const MyComponent = (props) => {
//   return <div>
//     안녕하세요. 제이름은 {props.name}입니다.<br />
//     children 값은 {props.children}입니다.
//   </div>;
// };

// const MyComponent = props => {
//   return <div>안녕하세요. 제이름은 {props.name}입니다.</div>
// }

// const MyComponent = () => {
//   return <div>나의 새롬고 멋진 컴포넌트</div>;
// };

export default MyComponent;
