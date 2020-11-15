import logo from './logo.svg';
import './App.css';
import Header from './libs/js/header.js';
import QuizBuilder from './libs/js/quizBuilder.js';

function App() {
  return (
    <div className="App">
      <Header />
      <QuizBuilder />
    </div>
  );
}

export default App;
