import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Spinner from "./Spinner";


//const App = () => {
function App() {
  // State
  const [posts, setPosts] = useState(null);
  const [data, setData] = useState({ hits: [] });
  const [user, setUser] = useState({
    results: [],
  });

  // ErrorHandling
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect Hook
  useEffect(() => {

    // function inside of Effect-hook defined
    async function fetchDataHits() {
      // await here
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=react-fetch"
      );
      setData(result.data);
    }

    // fetch the data Call the function
    fetchDataHits();
  }, []);

  // Effect Hook
  useEffect(() => {
    // function inside EffectHook
    // fetch the user with axios
    //fetchDataUser();

    // fetch the user with fecth
    //fetchDataRandomUserMeErrorHandling();
    // fetch and errorhandling
    fetchDataRandomUserMeWithErrors();
    // from jsonplaceholder

    readJsonPlaceHolder();
  }, []);

  // function outside effectHook with standard function fetch
  // fecth with async/await = better to read than with teh Promise-Chain
  // function outside effectHook with standard function fetch
  // fetch with async/await = better to read than with the Promise-Chain
  // preferred way of fetching data async/await with error handling!
  // Synthactic Sugar over Promises :)
  //const fetchDataRandomUserMeErrorHandling = async () => {
  // function outside effectHook with standard function fetch
  // fetch using Promise and Promise-chain of handlers
  const fetchDataRandomUserMeWithErrors = async () => {
    await fetch("https://randomuser.me/api?results=20")
      .then((response) => response.json())
      .then(
        (result) => {
          setUser(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      )
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  };
  /**
   * renders one post, the post will be implicitly sent as param
   * @param {renderPost from jsonplaceholder} p
   */
  function renderPost(p) {
    return (
      <div key={p.key} className="product">

        <a href="/">
          <h3>{p.title}</h3>
          <p>${p.body}</p>
        </a>
      </div>
    );
  }
  // from jsonplaceholder
  async function readJsonPlaceHolder() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(
        // more functions
        (json) => setPosts(json),
        (json) => console.log(json),
        (error) => setError(error)
      ) // with a function body
      /* .then((json) => {
        setPosts(json);
        //console.log(json);
      }) */
      // .then((json) => console.log(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  /* variant 2: store the return value List in the const! */
  const dataHitsMap = data.hits.map((item) => (
    <li key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </li>
  ));
  /* variant 2: store the return value List in the const! */
  function RandumUserMe() {
    return (
      //const RandumUserMe = () =>
      user.results.map((user) => (
        <li key={user.login.uuid}>
          <a href={user.name.first}>{user.name.first}</a>
          <img src={user.picture.thumbnail} alt="hello" />
        </li>
      ))
    );
  }

  /* variant 3:function expression */

  /*console.log(this)

  const testerObj = {
    func1: function(){
      // this here is the caller of x, global window obj here
      console.log("from function", this);
    },

    func2: () => {
      // this here is NOT the caller of y
      console.log("from arrow function", this)
    }
  }
  testerObj.func1();
  testerObj.func2();
  // early returns
  return (

        <h3>hello early</h3>
  )*/
  // early return
  if (loading) return <Spinner />;
  if (error) throw error;
  return (
    <React.Fragment >
      <div className="App-header">
        <header><h1>Fetching Examples (algolia, randomuser.me, jsonplaceholder) 2022 Morning</h1></header>
        <h3>Data Hits Example</h3>
        <ul>
          {
            // calling the const of the List, shows the List directly
            dataHitsMap
            // calling the const of the function-reference because of that ()
            //dataHitsMap1()
            // variant 1: calling the map directly and the given function, return an array
            // data.hits.map((item) => (
            //   <li key={item.objectID}>
            //     <a href={item.url}>{item.title}</a>
            //   </li>
            // ))
          }
        </ul>
        <h3>Random User Example</h3>
        <RandumUserMe />
        <h3>from Jsonplaceholder</h3>
        <ul>

          {

            // random user
            //randumUserMe
           posts.map(renderPost)
          }
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
