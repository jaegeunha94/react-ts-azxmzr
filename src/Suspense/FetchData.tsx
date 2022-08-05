function fetchUser(userId) {
  let user = null;
  const suspender = fetch(`https://61b88c9d64e4a10017d19053.mockapi.io/user`)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        user = data;
      }, 3000);
    });
  return {
    read() {
      if (user === null) {
        throw suspender;
      } else {
        return user;
      }
    },
  };
}

function fetchPosts(userId) {
  let posts = null;
  const suspender = fetch(`https://61b88c9d64e4a10017d19053.mockapi.io/user`)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        posts = data;
      }, 3000);
    });
  return {
    read() {
      if (posts === null) {
        throw suspender;
      } else {
        return posts;
      }
    },
  };
}

function fetchData(userId) {
  return {
    user: fetchUser(userId),
    posts: fetchPosts(userId),
  };
}

export default fetchData;
