
import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemListContainer from '../item-list-container/itemListContainer';
import NavBar from '../navbar/NavBar';
import NotFound from '../not-found/NotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:id" element={<ItemListContainer/>} />
                <Route path='*' element={<NotFound/>} />

            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
