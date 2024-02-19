const Sample = ({ loadingPost, loadingUsers, post, users }) => {
  console.log(post)
  console.log(users)
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && '로딩중'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr></hr>
      <section>
        <h1>시용자 목록</h1>
        {loadingUsers && '로딩중'}
        {!loadingUsers && users && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
