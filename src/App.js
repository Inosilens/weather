import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import "./App.css"
import {Header} from "./container/Header";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
        <div className="app">
       <Header/>
       </div>
        </Provider>)
}

export default App