import Main from "./pages/main";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import AddPage from "./pages/AddPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element = {<Main/>}/>
                <Route path={'/profile'} element = {<ProfilePage/>}/>
                <Route path={'/register'} element = {<RegisterPage/>}/>
                <Route path={'/addCard'} element = {<AddPage/>}/>
                <Route path={'/search'} element = {<SearchPage/>}/>
                <Route path={'/login'} element = {<Login/>}/>
            </Routes>

        </div>
    );
}

export default App;


