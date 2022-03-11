import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import SVGComponent from './SVGComponent'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

  

function App() {
  const [menuItems, setMenuItems ] = useState(items);
  const [ categories, setCategories ] = useState(allCategories);

  const filteredItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    setMenuItems(items.filter(item => item.category === category))
  }

  return (
    <main>
    <section className="menu section">
      <div className="title">
        <SVGComponent className="coffeeBean" /> 
        <h2>Brown Ice coffee</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filteredItems={filteredItems} />
      <Menu items={menuItems} />
    </section>
  </main>
  );
}

export default App;
