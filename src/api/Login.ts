import { useQuery } from "react-query";
import { httpGet } from "./common.ts";
// レスポンスの型定義
interface ValidateLoginUserResponse {
  isSuccess: boolean;
}

export const useValidateLoginUser = (
  email: string,
  password: string,
  onSuccess: (data: ValidateLoginUserResponse) => void
) => {
  const { isLoading, isError, refetch } = useQuery(
    [email + password],
    httpGet<ValidateLoginUserResponse>("/ValidateLoginUser", {
      email: email,
      password: password,
    }),
    { enabled: false, onSuccess: onSuccess }
  );
  return { isLoading, isError, validateLoginUser: refetch };
};
