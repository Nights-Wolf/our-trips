import Header from "./Header";
import Card from "./Card";
import zakopane from "./trips";
import Footer from "./Footer";
import react from "react";

function App() {
    const [card, swapCard] = react.useState(zakopane.map(trip => {
      return <Card
      key={trip.id} 
      img={trip.img}
      destiny={trip.destiny}
      date={trip.date}  
      description={trip.description}/>
  }))

  return(
    <div>
    <Header />
    <section className="section--card">
    {card}
    </section>
    <Footer />
    </div>
  );
}

export default App;
