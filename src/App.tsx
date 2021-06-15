import './App.css';
import React from "react";
import LibraryContainer from "./components/Library/LibraryContainer";
import {Route} from "react-router-dom";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import Add from "./components/Add/Add";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={"App"}>
        <Header/>
        <div className={"app-content"}>
            <Route path='/library'
                   render={() => <LibraryContainer/>}/>
            <Route path='/add'
                   render={() => <Add/>}/>
            <Route path='/editor'
                   render={() => <Editor/>}/>
        </div>
        <div className={"nav-wrapper"}>
            <Navbar/>
        </div>
    </div>
  );
}

export default App;
