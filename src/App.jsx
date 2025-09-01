const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];  
import reactImg from './assets/react-core-concepts.png';

function getRondomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRondomInt(2)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return  (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.tile}</h3>
      <p>{props.description}</p>
    </li>
  )

}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts 
            title="Components"
            description="The core UI building block of any React app"
            image={reactImg}
          />
          <CoreConcepts title="Props" />
          <CoreConcepts />
          <CoreConcepts />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;