import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = true

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true}></Navigate>
  }

  return (
    <div>마이 페이지</div>
  )
}

export default MyPage