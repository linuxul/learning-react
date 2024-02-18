import { NavLink, Link, Outlet } from 'react-router-dom';

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: 'green',
    fontSize: 21
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

const Articles = () => {
  return (
    <div>
      <Outlet></Outlet>
      <ul>
        <ArticleItem id={1}></ArticleItem>
        <ArticleItem id={2}></ArticleItem>
        <ArticleItem id={3}></ArticleItem>
      </ul>
    </div>
  );
};

// const Articles = () => {
//   const activeStyle = {
//     color: 'green',
//     fontSize: 21
//   };

//   return (
//     <div>
//       <Outlet></Outlet>
//       <ul>
//         <li>
//           <NavLink
//             to="/articles/1"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             게시글 1
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/articles/2"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             게시글 2
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/articles/3"
//             style={({ isActive }) => (isActive ? activeStyle : undefined)}
//           >
//             게시글 3
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// const Articles = () => {
//   return (
//     <div>
//       <Outlet></Outlet>
//       <ul>
//         <li>
//           <Link to="/articles/1">게시글 1</Link>
//         </li>
//         <li>
//           <Link to="/articles/2">게시글 2</Link>
//         </li>
//         <li>
//           <Link to="/articles/3">게시글 3</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

export default Articles;
