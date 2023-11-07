import logo from './logo.svg';
import './App.css';
import NewsType from './NewsTypes';
import { NewsArticle } from './NewsArticle';

function App() {
  return (
    <div className="App">
       <NewsType title="Politics" >
          <NewsArticle title="Election in XYZ State" snapshot="Election Declared in XYZ State"></NewsArticle>
          <hr />
          <NewsArticle title="Election in ABC State" snapshot="Election Declared in ABC State"></NewsArticle>
          <NewsArticle title="Election in PQR State" snapshot="Election Declared in PQR State"></NewsArticle>
       </NewsType>
       <NewsType title="Sports">
          <NewsArticle title="Cricket" snapshot="Cricket is a game"></NewsArticle>
          <NewsArticle title="Football" snapshot="Football is a game"></NewsArticle>
          <NewsArticle title="Hockey" snapshot="Hockey is a game"></NewsArticle>
       </NewsType>
      <NewsType title="Technology" isSubscribed={true}>
          <NewsArticle title="React" snapshot="React is a JS library"></NewsArticle>
          <NewsArticle title="Angular" snapshot="Angular is a JS framework"></NewsArticle>
          <NewsArticle title="Vue" snapshot="Vue is a JS framework"></NewsArticle>
      </NewsType>
    </div>
  );
}

export default App;
