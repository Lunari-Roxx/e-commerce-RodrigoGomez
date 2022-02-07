
import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemListContainer from '../item-list-container/itemListContainer';
import NavBar from '../navbar/NavBar';

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" element={ItemListContainer} />
                <Route path="/category/11" element={ItemListContainer} />

            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
