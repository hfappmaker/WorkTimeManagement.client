 import { useQuery } from "react-query"
 import axios from "axios"
 // レスポンスの型定義
  interface Posts {
    countUp: number;
  }

  type PostsGetResponse = Posts[];

  // Promiseを返す関数
  const fetchPosts = async () => {
    const { data } = await axios.request<PostsGetResponse>({
      url: "http://localhost:8000/ping",
      method: "GET",
    })
    return data
  }

export const usePostsQuery = () => {
return useQuery(["posts"], fetchPosts);
};
