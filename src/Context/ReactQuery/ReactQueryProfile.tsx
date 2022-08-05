import * as React from 'react';
import { useQueryClient, useQuery, useMutation } from 'react-query';
import Profile from '../../Context/ReactQuery/Profile';

const ReactQueryProfile = () => {
  const queryClient = useQueryClient();
  const fetcher = () =>
    fetch('https://61b88c9d64e4a10017d19053.mockapi.io/user').then((res) =>
      res.json()
    );
  const handleEditProfile = () => {};

  const testMutation = useMutation(fetcher, {
    onMutate: (variable) => {},
    onError: (error, variable, context) => {
      // error
    },
    onSuccess: (data, variables, context) => {
      // unique key를 통해서 data가 invalid 상태임을 전달합니다.
      // react query에서는 해당 데이터를 즉시 refetch 하게 됩니다.
      // queryClient.invalidateQueries(['/posts']);
      queryClient.invalidateQueries({
        queryKey: ['/posts'],
        refetchActive: false,
      });

      // 데이터 변경
      // queryClient.setQueryData(['/posts'], [{ name: 'test', age: 29 }]);
      queryClient.setQueryData(['/posts'], [{ name: 'test', age: 29 }]);
    },
    onSettled: () => {
      console.log('end');
    },
  });

  const handleSubmit = () => {
    testMutation.mutate({ name: '1', age: 1234 });
  };

  let [userId, setUserId] = React.useState(0);
  // 쿼리는 userId 값이 존재할 때까지 실행되지 않습니다
  // setTimeout(() => {
  //   setUserId(1);
  // }, 1000);

  const { isLoading, error, data, isFetching } = useQuery(['/posts'], fetcher, {
    // 쿼리는 userId 값이 존재할 때까지 실행되지 않습니다
    // enabled 옵션을 사용하면 useQuery를 동기적으로 사용 가능합니다
    // enabled: !!userId,
    //refetch interval
    // refetchInterval: 1000000000,

    // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    refetchOnWindowFocus: false,

    // 실패시 재호출 몇번 할지
    retry: 0,

    suspense: true,

    // 성공시 호출
    onSuccess: (data) => {
      console.log(data);
    },
    // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
    // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
    onError: (e) => {
      console.log(e.message);
    },
  });
  if (error) return <div>{error}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Profile
      handleSubmit={handleSubmit}
      handleEditProfile={handleEditProfile}
      library="React Query"
      data={data}
    />
  );
};

export default ReactQueryProfile;
