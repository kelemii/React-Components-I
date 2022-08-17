// import logo from './logo.svg';
import "./App.css";
import GroceryList from './groceryList';

// let onListItemClick = (event) => {
//   // console.log(event.target.innerText);
//   event.target.innerHTML = `<b>${event.target.innerText}</b>`;
// };

var App = () => (
  <>
    <div id="header">
      <h5>HEADER</h5>
      <p>Some text in the header</p>
    </div>
    <div class="List">
      <h2>My Grocery List</h2>
      <GroceryList items={["banana", "apple", "orange", "soy sauce"]} />
    </div>
  </>
);

export default App;
