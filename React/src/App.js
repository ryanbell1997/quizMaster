import logo from './logo.svg';
import './App.css';
import Header from './libs/header/header.js';
import QuizBuilder from './libs/quizBuilder/quizBuilder.js';

function App() {
  return (
    <div className="App">
      <Header />
      <QuizBuilder />
    </div>
  );
}

export default App;
