import Header from "./Header";
import Card from "./Card";
import zakopane from "./trips";

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
    {travel}
    </section>
    </div>
  );
}

export default App;
