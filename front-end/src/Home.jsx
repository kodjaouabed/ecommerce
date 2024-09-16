import React from 'react';

//composant
import TopBar from './topBar';
import NavBar from './navBar';
import Categories from './Categories';
import PopularProduct from './popularProduct';
import NewProduct from './NewProduct';
import Products from './Products';
import './App.css';

const Home = () => {
    return (
        <div className="App">
       <TopBar/>
       <NavBar/>
       <Categories/>
       <PopularProduct/>
       <NewProduct/>
       <Products/>
    </div>
    );
}

export default Home;
