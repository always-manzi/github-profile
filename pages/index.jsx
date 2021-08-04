import React , { useState } from "react";
import Link from "next/link";

const App = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <label>
        username
        <input value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <p>{username} 깃허브 검색하기</p>
      <Link href={`/users/${username}`}>
        <button>검색하기</button>
      </Link>
    </div> 
  );
};

export default App;