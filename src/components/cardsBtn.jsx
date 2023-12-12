import React from 'react';

const Card = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Активно</h5>
                        <p className="card-text">Район: Центральный</p>
                        <p className="card-text">Дата: 01.06.2023</p>
                        <p className="card-text">Дополнительная информация: порода - сиамская</p>
                        <p className="card-text">Клеймо: есть</p>
                        <button className="btn btn-secondary">Редактировать</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
