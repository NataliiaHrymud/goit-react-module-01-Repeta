import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const link = React.createElement('a',
// {
//   href: 'https://reactjs.org/',
//   target: '_blank',
//   rel: 'noreferrer noopener',
// },
// 'Ссылка на reactjs.org',)
// console.log(link);

// const linkInJSX = (
//   <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
//     Ссылка на reactjs.org
//   </a>
// ); 
// console.log(linkInJSX);

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });
// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', {children: [image, title, price, button]});

// const imgURL = 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';

// const price = 10.99;
// const productInJSX = (
//   <div>
//     <img src = {imgURL} alt = "Tacos With Lime" width = "640"/>
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type = "button">Add to cart</button>
//   </div>
// );

// function Product(props){
//   return (
//     <div>
//     <img src = {props.imgUrl} alt = {props.name} width = "640"/>
//     <h2>{props.name}</h2>
//     <p>Price: {props.price}$</p>
//     <button type = "button">Add to cart</button>
//   </div>
//   )
// }
//  деструктуризация props в ф-ции Product выше позволяет потом не писать {props.imgUrl}{props.name}, 
//  а просто писать {imgUrl}{name}...
// function Product ({imgUrl,name, price}){
//   return (
//     <div>
//     <img src = {imgUrl} alt = {name} width = "640"/>
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type = "button">Add to cart</button>
//   </div>
//   )
// }

// function App() {
//   return (
//     <> 
//       <h1>Best selling products</h1>
//       <Product 
//       imgUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       name = "Tacos With Lime"
//       price = "20"
//       />
//       <Product 
//       imgUrl = "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//       name = "Fries and Burger"
//       price = "10.99"
//       />
//     </>
//   )
// }

ReactDOM.render(<App />, document.querySelector('#root'));
