// import './App.css';
import Card from "./components/card.js"
import Header from "./components/header.js"
import data from "./data.js"

function App() {
    const cards = data.map(item => {
      return (
        <div className="card">
          
          <Card
              key={item.id}
              {...item}
          />
        </div>
      )
  })    
  
  return (
    <div className="body">
      <Header />
      {cards}
    </div>
  )

}

export default App;
