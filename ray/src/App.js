import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import pages
import About from "./pages/About";
import MyWork from "./pages/MyWork";
//import components
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper"

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Wrapper>
                    <Route exact path="/" component={About} />
                    <Route exact path="/mywork" component={MyWork} />
                </Wrapper>
                
            </div>
        </Router>
    )
}

export default App;