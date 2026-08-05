import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [posts, setposts] = useState([]);
  const [count, setcount] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setposts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {posts.slice(0, count).map((ele, i) => {
        return (
          <div className="card">
            <h1>{ele.id}</h1>
            <h1>{ele.title}</h1>
            <h1>{ele.body}</h1>
          </div>
        );
      })}
      {count < posts.length && (
        <button onClick={() => setcount(count + 10)}>Load</button>
      )}
    </div>
  );
};

export default App;
