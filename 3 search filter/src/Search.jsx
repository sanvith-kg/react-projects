import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import axios from "axios";
const Search = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");
  const [filterdata, setfilterdata] = useState([]);
  const task = async () => {
    let datas = await axios.get("https://jsonplaceholder.typicode.com/users");
    let res = await datas.data;
    setdata(res);
  };
  useEffect(() => {
    task();
  }, []);

  const handleSearch = () => {
    const searchFilter = data.filter((user) => {
      return user.username.toLowerCase().includes(search.toLowerCase());
    });
    setdata(searchFilter);
    setfilterdata(searchFilter);
  };

  const inp = useRef();
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="enter the username..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="container">
        <div className="cards">
          {filterdata.map((ele, i) => {
            let { id, email, username, website } = ele;
            return (
              <div className="card">
                <h1>{id}</h1>
                <h1>{username}</h1>
                <h1>{email}</h1>
                <h1>{website}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Search.css";
// const Search = () => {
//   const [data, setdata] = useState([]);
//   const [search, setsearch] = useState("");

//   const task = async () => {
//     let data = await axios.get("https://fakestoreapi.com/users");
//     let res = await data.data;
//     setdata(res);
//   };
//   useEffect(() => {
//     task();
//   }, []);

//   const search_name = data.filter((user) => {
//     return user.username.toLowerCase().includes(search.toLowerCase());
//   });

//   return (
//     <div>
//       <div className="search">
//         <h1>Search Here</h1>
//         <input
//           value={search}
//           onChange={(e) => {
//             setsearch(e.target.value);
//           }}
//           type="text"
//           placeholder="Search......."
//         />
//       </div>
//       <div className="cards">
//         {search_name.map((ele, i) => {
//           return (
//             <div className="card">
//               <h1>{ele.id}</h1>
//               <h2>{ele.username}</h2>
//               <h3>{ele.email}</h3>
//               <h4>{ele.password}</h4>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Search;
