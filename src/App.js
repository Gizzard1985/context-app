import './App.css';
import BookList from './components/BookList';
import Header from './components/Header'
import AddNewBook from './components/AddNewBook'; 


function App() {
  return (
    <div className="App">
       <Header/>
       <AddNewBook/>
       <BookList/>
    </div>
  );
}

export default App;
