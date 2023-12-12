import React from "react";
import logo from '../image/logo.jpg'
import { Link } from 'react-router-dom';
const Header = ()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-">
                <div className="container-fluid">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="navbar-brand" ><img src={logo} className="w-25 rounded-3" alt="logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link" aria-current="page" >Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'profile'} className="nav-link" >Личный кабинет</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/register'} className="nav-link">Регистрация</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/addCard'} className="nav-link" >Добавить объявление</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/search'}  className="nav-link" >Поиск по объявлениям</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/login'} className="nav-link" >Вход</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" list="pets" placeholder="Поиск" aria-label="Search"/>
                                <button className="btn btn-primary" onClick="">Поиск</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Header;
