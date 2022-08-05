import * as React from 'react';

export default function Posts({ resource }) {
  const posts = resource.posts.read();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.name}>
          {post.name}. {post.age}
        </li>
      ))}
    </ul>
  );
}
