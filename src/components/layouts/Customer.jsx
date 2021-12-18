import React from 'react';
import Home from '../Customer/pages/Home'
import Header from '../Customer/partials/header/Header'
import Footer from '../Customer/partials/footer/Footer'
function Customer(props) {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
}

export default Customer;