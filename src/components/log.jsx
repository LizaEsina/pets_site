import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Отменяем стандартное поведение формы

        // Проверяем введенные данные
        if (email === "user@user.ru" && password === "paSSword1") {
            window.location.href = "index.html"; // Перенаправляем на index.html
        } else {
            alert("Неверные данные!"); // Выводим сообщение об ошибке
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <pre></pre>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <pre></pre>
        </div>
    );
};

export default Login;