import axios from "axios"

const ENDPOINT: string = "http://localhost:8000";

export const httpGet = <TResponse>(path: string, params: unknown, timeout: number = 5000) => async () => {
    const { data } = await axios.get<TResponse>(
      `${ENDPOINT}${path}`,
      {
        timeout,
        params,
      })
    return data
}