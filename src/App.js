import Header from "./Header";
import Card from "./Card";
import zakopane from "./trips";
import Footer from "./Footer";

function App() {
    const travel = zakopane.map(trip => {
      return <Card 
      img={trip.img}
      destiny={trip.destiny}
      date={trip.date}  
      description={trip.description}/>
  })
  return(
    <div>
    <Header />
    <section className="section--card">
    {zakopane.length >= 1 ? travel: <p></p>}
    <button className="right-button">&#707;</button>
    <button className="left-button">&#706;</button>
    </section>
    <Footer />
    </div>
  );
}

export default App;
