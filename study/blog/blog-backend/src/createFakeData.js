const Post = require('./models/post');

exports.createFakeData = async() => {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body: 'body contents',
    tags: ['가짜', '데이터']
  }));

  try {
    await Post.insertMany(posts);
    console.log('Fake data created');
  } catch (err) {
    console.error(err);
  }

}
