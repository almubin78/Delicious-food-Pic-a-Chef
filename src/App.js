import './App.css';

function App() {
  const handlePost = () =>{
    const user = {
      name:'almubin',job:'learning web development'
    }
    fetch('http://localhost:5000/comment',{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(user)
    })
  }
  return (
    <div className="App">
        <button onClick={handlePost}>post</button>
    </div>
  );
}

export default App;
