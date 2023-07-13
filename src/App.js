import React from 'react';
import { Navbar } from './components';
import { Adoption, Benefits, Faq, Footer, Header, Rules, Statistics } from './containers';
import './app.css';

const App = () => {
    return(
        <div>
            <Navbar />
            <Header />
            <Rules />
            <Statistics />
            <Faq />
            <Adoption />
            <Benefits />
            <Footer />
        </div>
    )
}

export default App;