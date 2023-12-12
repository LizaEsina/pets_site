import React, { useState } from 'react';

function Info() {
    const [autoRegister, setAutoRegister] = useState(false);

    const handleAutoRegisterChange = () => {
        setAutoRegister(!autoRegister);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center text-white bg-primary m-2">Добавление информации о найденном животном</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="contact-phone">Контактный номер телефона нашедшего питомца:</label>
                    <input type="text" className="form-control" id="contact-phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="contact-email">E-mail человека, нашедшего животное:</label>
                    <input type="email" className="form-control" id="contact-email" required />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="auto-register" onChange={handleAutoRegisterChange} />
                    <label className="form-check-label" htmlFor="auto-register">Автоматическая регистрация пользователя при добавлении объявления</label>
                </div>
                {autoRegister && (
                    <div>
                        <div className="form-group" id="password-block">
                            <label htmlFor="password">Пароль:</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <div className="form-group" id="confirm-password-block">
                            <label htmlFor="confirm-password">Подтверждение пароля:</label>
                            <input type="password" className="form-control" id="confirm-password" />
                        </div>
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="animal-type">Вид животного:</label>
                    <input type="text" className="form-control" id="animal-type" />
                </div>
                <div className="form-group">
                    <label htmlFor="animal-name">Кличка (если есть):</label>
                    <input type="text" className="form-control" id="animal-name" />
                </div>
                <div className="form-group">
                    <label htmlFor="animal-photos">Фото найденного животного (до 3 фотографий):</label>
                    <input type="file" className="form-control" id="animal-photos" multiple />
                </div>
                <div className="form-group">
                    <label htmlFor="additional-info">Дополнительная информация:</label>
                    <textarea className="form-control" id="additional-info" rows="5"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="stamp">Клеймо (если есть):</label>
                    <input type="text" className="form-control" id="stamp" />
                </div>
                <div className="form-group">
                    <label htmlFor="district">Район:</label>
                    <input type="text" className="form-control" id="district" />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Дата, когда было найдено животное:</label>
                    <input type="date" className="form-control" id="date" />
                </div>

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="consent" required />
                    <label className="form-check-label" htmlFor="consent">Согласие на обработку персональных данных</label>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Добавить информацию</button>
                <pre></pre>
            </form>
        </div>
    );
}

export default Info;