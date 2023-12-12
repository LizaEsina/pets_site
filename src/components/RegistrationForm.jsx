import React, { useState } from 'react';

function RegistrationForm() {
    const [inputName, setInputName] = useState('');
    const [inputFio, setInputFio] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputCity, setInputCity] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputName && inputFio && inputEmail && inputPassword && inputAddress && inputCity) {
            window.location.href = 'index.html';
        } else {
            alert('Пожалуйста, заполните все поля формы.');
        }
    };

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Регистрация</h2>
            <div className="form">
                <form className="row g-3" id="myForm" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="inputName" value={inputName} onChange={(event) => setInputName(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputFio" className="form-label">Фамилия</label>
                        <input type="text" className="form-control" id="inputFio" value={inputFio} onChange={(event) => setInputFio(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Эл. адрес</label>
                        <input type="email" className="form-control" id="inputEmail4" value={inputEmail} onChange={(event) => setInputEmail(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="inputPassword4" value={inputPassword} onChange={(event) => setInputPassword(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">Адрес</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Проспект Ленина" value={inputAddress} onChange={(event) => setInputAddress(event.target.value)} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Город</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="Брянск" value={inputCity} onChange={(event) => setInputCity(event.target.value)} />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Проверить меня
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Зарегистрироваться</button>
                </form>
            </div>
            <pre></pre>
            <pre></pre>
        </div>
    );
}

export default RegistrationForm;