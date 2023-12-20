import React, {useState} from "react";
import logo from '../image/logo.jpg'
import { Link } from 'react-router-dom';
import QuickSearch from "../components/QuickSearch";
const Header = ()=>{

    let [card, setCard]=useState([]);

    let [query, setQuery]=useState('');

    const send=()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/search?query="+query, requestOptions)
            .then(response => response.json())
            .then(result => {console.log(result)


                let data=result.data.orders.map((item)=>item.description)
                let set=new Set(data)
                let uniq=Array.from(set)

                data=uniq.map((value, index)=><option value={value} key={value}></option>)


                setCard(data)
                console.log(card)
            })



            .catch(error => console.log('error', error));
    }

    const search = (e) => {
        setQuery(e.target.value)

        if (query.length>2) setTimeout(send, 1000);
    }


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
                                <Link to={'/profile'} className="nav-link" >Личный кабинет</Link>
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
                        <QuickSearch/>

                    </div>
                </div>
            </nav>

        </div>
    );
};
export default Header;
