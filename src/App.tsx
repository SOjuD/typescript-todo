import React from 'react';
import {Provider} from "react-redux";
import store from './store'
import Header from "./components/header";
import Footer from "./components/footer";
import MoviesList from "./components/moviesList";

function App() {
  return (
      <Provider store={store}>
        <Header/>
          <MoviesList/>
        <Footer/>
      </Provider>
  );
}

export default App;
