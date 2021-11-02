import React, {useState} from "react";
import Data from './Data';
import List from "./List";

function App() {
  const [people, setpeople] = useState(Data)
  return (
    <main className='main'>
      <section className='container'>
        <h3 className='head'>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setpeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
