import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [post, setpost] = useState([]);
  const [page, setpage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setpost(res.data);
    };
    fetchData();
  }, []);

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentPosts = post.slice(start, end);
  const totalPages = Math.ceil(post.length / itemsPerPage);
  return (
    <div>
      <div className="container">
        {currentPosts.map((ele, i) => {
          console.log(ele);
          return (
            <div key={ele.id}>
              <h1>{ele.id}</h1>
              <h1>{ele.title}</h1>
              <h1>{ele.body}</h1>
            </div>
          );
        })}
      </div>
      <div className="btn">
        <button onClick={() => setpage(page - 1)} disabled={page === 1}>
          prev
        </button>
        <h1>page {page}</h1>
        <button
          onClick={() => setpage(page + 1)}
          disabled={page === totalPages}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
