import * as React from 'react';
import { useState, useEffect } from 'react';
import BeforeSuspensePost from '../../Suspense/BeforeSuspense/BeforeSuspensePost';

function BeforeSuspenseUser({ userId }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://61b88c9d64e4a10017d19053.mockapi.io/user`)
      .then((response) => response.json())
      .then((user) => {
        setTimeout(() => {
          setUser(user);
          setLoading(false);
        }, 3000);
      });
  });

  if (loading) return <p>사용자 정보 로딩중...</p>;
  return (
    <div>
      <p>{user.name} 님이 작성한 글</p>
      <BeforeSuspensePost userId={userId} />
    </div>
  );
}

export default BeforeSuspenseUser;
