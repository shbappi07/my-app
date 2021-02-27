import logo from './logo.svg';
import './App.css';

function App() {
  
  const productsLists = [
    {name: "Adobe", price: "$99.99"},
    {name: "Illustrator", price: "$89.99"},
    {name: "Adobe Premier", price: "$199.99"}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Products name = {productsLists[0].name} price = {productsLists[0].price}></Products>
        <Products name = {productsLists[1].name} price = {productsLists[0].price}></Products>
        <Products name = {productsLists[2].name} price = {productsLists[0].price}></Products>
        <Person name = "Salimul" prof = "student"></Person>
        <Person name = "korimul" prof = "Bekar"></Person>
        <Person name = "alimul" prof = "sakar"></Person>
        <Person name = "khan" prof = "Denadar"></Person>
      </header>
    </div>
  );
}

function Person(props) {

  const personStyle = {
    
    border:'1px solid green',
    padding: '5px',
    margin: '10px'
  }

  return (
    <div style = {personStyle}> 

      <h1>Welcome to react</h1>
      <h2>{props.name}</h2>
      <h3>Profession:{" "}{props.prof} </h3>

    </div>
    
    
  );
}
// products practices
function Products(props) {
  const productsStyle = {
    border: '2px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '400px',
    float: 'left',
    color: 'black'
  }
  return(
    <div style = {productsStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Price: {props.price}</h3>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
