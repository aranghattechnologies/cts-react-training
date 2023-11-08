import logo from './logo.svg';
import './App.css';
import NewsType from './NewsTypes';
import { NewsArticle } from './NewsArticle';

function App() {

  let newsTypes = [
    {
      title: "Politics", isSubscribed: true, articles: [
        { title: "Election in XYZ State", snapshot: "Election Declared in XYZ State" },
        { title: "Election in ABC State", snapshot: "Election Declared in ABC State" },
        { title: "Election in PQR State", snapshot: "Election Declared in PQR State" }

      ]
    },
    {
      title: "Sports", isSubscribed: true, articles: [
        { title: "Ronaldo Joins ", snapshot: "Ronaldo Joins Manchester United" },
        { title: "Messi Joins ", snapshot: "Messi Joins PSG" },
        { title: "Neymar Joins ", snapshot: "Neymar Joins Barcelona" }
      ]
    },
    {
      title: "Technology", isSubscribed: false, articles: [
        { title: "React", snapshot: "React is a JS library" },
        { title: "Angular", snapshot: "Angular is a JS framework" },
        { title: "Vue", snapshot: "Vue is a JS framework" }
      ]
    }
  ]

  return (
    <div className="App">
      {/* <NewsType title="Politics" >
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
      </NewsType> */}
      {
        newsTypes.map((item, index) => {
          return item.isSubscribed ?
            <NewsType key={index} title={item.title} isSubscribed={item.isSubscribed}>
              {
                item.articles.map((article, index) => <NewsArticle key={index} title={article.title} snapshot={article.snapshot}></NewsArticle>)
              }
            </NewsType> : null
        }
        )
      }
    </div>
  );
}

export default App;
