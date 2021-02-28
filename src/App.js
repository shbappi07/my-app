import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const names = ['salimul', 'alimul', 'kalimul', 'yalimul', 'Younus'];

  // const nameMap = names.map(name => name);
  // console.log(nameMap);
  
  const products = [
    {name: "Adobe", price: "$99.99"},
    {name: "Illustrator", price: "$89.99"},
    {name: "Adobe Premier", price: "$199.99"}
  ]

  return (
    <div className="App">
      <header className="App-header">
      <Users></Users>
      <Counter></Counter>

      {//displaying product box using map function
          products.map(product => <Products product = {product}></Products>)
          
        }

        {/* <Products name = {products[0].name} price = {products[0].price}></Products>
        <Products name = {products[1].name} price = {products[0].price}></Products>
        <Products name = {products[2].name} price = {products[0].price}></Products> */}

        
        {
          products.map(pd =><li>{pd.name}</li>)
          
        }
        <ul>
          { 
            //showing name list using map function
            names.map(name => <li>{name}</li>)
            
          }
        </ul>
        
        <Person name = "Salimul" prof = "student"></Person>
        <Person name = "korimul" prof = "Bekar"></Person>
        <Person name = "alimul" prof = "sakar"></Person>
        <Person name = "khan" prof = "Denadar"></Person>
      </header>
    </div>
  );
}
// products practices
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
      <h2>Name: {props.product.name}</h2>
      <h3>Price: {props.product.price}</h3>
      <button>Buy Now</button>
    </div>
  );
}
//counter practice
function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count+1);
    //const newCount = count+1;
    
  
  return(
    <div style={{margin:'10px'}}> 

      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count+1)}>Increase</button>
      <button onClick = {() => setCount(count-1)}>Decrease</button>

    </div>
  )
}

//api call using rect
function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  })
  return(
    <div>
      <h2>Dynamic Users: {user.length}</h2>
      <ul>
        {
          user.map(user => <li>{user.name} (Email:) {user.email}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
