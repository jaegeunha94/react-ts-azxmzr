import * as React from 'react';
import { useState, useEffect } from 'react';

function BeforeSuspensePost({ userId }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://61b88c9d64e4a10017d19053.mockapi.io/user`)
      .then((response) => response.json())
      .then((posts) => {
        setTimeout(() => {
          setPosts(posts);
          setLoading(false);
        }, 3000);
      });
  });

  if (loading) return <p>글목록 로딩중...</p>;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>나이: {post.age}</li>
      ))}
    </ul>
  );
}

export default BeforeSuspensePost;
