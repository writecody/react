import React from 'react';
import './App.css';
import Article from './components/article/article'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Menu from './components/menu/menu'
import Sidebar from './components/sidebar/sidebar'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu></Menu>
      <Article></Article>
      <Footer></Footer>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
