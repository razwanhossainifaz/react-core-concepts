import React , { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let nayoks = ['Razzak' , 'Alamgir' , 'Salman Shah' , 'Ifaz']
  let developer = ['Razwan Hossain Ifaz' , 'Md Fakrul Islam']
  let post = ['Junior Web Developer' , 'Senior Web Developer']
  let products = [
    {name : "Adobe Photoshop" , price : "US$ 20.99/mo"},
    {name : "Adobe Illustrator" , price : "US$ 20.99/mo"},
    {name : "Adobe Premiere Pro" , price : "US$ 20.99/mo"},
    {name : "Adobe After Effects" , price : "US$ 20.99/mo"},
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames)
  let person = {
    name : "Razwan Hossain Ifaz",
    post : "Junior Web Developer"
  }
  let style = {
    color : 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 style = {style}>My Heading : {person.name}</h1>
        <h2 style = {{color : "cyan"}}>Post : {person.post}</h2>
        <Counter></Counter>
        <Users></Users>
        <ol>
          {
            nayoks.map( nayok => <li>{nayok}</li>)
          }
          {
            products.map( product => <li>{product.name}</li>)
          }
        </ol>

        {
          products.map( product => <Product product = {product}></Product>)
        }
        
        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product>
        <Product product = {products[3]}></Product> */}

        <Hero name = {developer[0]} post = {post[0]}></Hero>
        <Hero name = "Nazmul Hossain Sifat" post = "Senior Scientific Officer"></Hero>
        <Hero name = {developer[1]} post = {post[1]}></Hero>
        <Hero name = "Sakib Al Hasan" post = "Cricket player"></Hero>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Counter(){
  const [count , setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1); ( 2nd Process to increase count )
  // const handleIncrease = () => {
  //   const newCount = count + 1;  ( 1st Process to increase count )
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count : {count}</h1>
      {/* ( 3rd / pro process to increase count) */}
      <button onClick = {() => setCount(count + 1)}>Add to cart</button>
      <button onClick = {() => setCount(count - 1)}>Remove from cart</button>
    </div>
  )
}

function Users(){
  const [users , setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
};

function Product(props) {
  const productStyle = {
    color : '#000000',
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : '#F5F4F6',
    height : '350px',
    width : '500px',
    float : 'left',
    margin : '0px 0px 10px 0px'
  }
  let {name , price} = props.product;
  return (
    <div style = {productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Hero(props) {
  let heroStyle = {
    border : "2px solid red", 
    padding : "10px 40px",
    margin : '10px',
    width : '400px'
  }
  return (
  <div style = {heroStyle}>
    <h4>Name : {props.name}</h4>
    <h2>Post : {props.post}</h2>
    <h3>Hero of the year</h3>
  </div>
  );
}

export default App;
