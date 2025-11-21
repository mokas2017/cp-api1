import './App.css';
import UserList from './components/UserList';

// High-level application shell with semantic landmarks.
function App() {
  return (
    <main className="App" role="main">
      <header>
        <h1>Users</h1>
      </header>
      <UserList />
    </main>
  );
}

export default App;
