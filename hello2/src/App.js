import useFetch from "./useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  if (loading) return <h2>LOADING...</h2>;
  if (error) console.log(error);

  return (
    <div className="App">
      <h1>
        {data?.setup} : {data?.punclline}
      </h1>
    </div>
  );
}
export default App;
