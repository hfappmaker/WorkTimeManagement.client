import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 投稿データの型定義
type Post = {
  countUp: number;
};

function App() {
  const defaultValue: Post = { countUp: 1 };
  const [count, setCount] = useState(defaultValue)
  useEffect(() => {
    //fetch('APIのエンドポイントを記述')
    fetch('http://localhost:8000/ping')
      .then(response => response.json())
      .then(data => setCount(data))
      .catch(error => console.error("Fetching data failed", error));
  }, []);// 空の依存配列を渡すことで、コンポーネントのマウント時に一度だけ実行される

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => {
          return count;
        })}>
          count is {count.countUp}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
