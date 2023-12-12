
import img2 from '../image/2.jpg'
import React, { useState } from "react";

const Cards = (props) => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Обработка отправки формы
        // Ваши дальнейшие действия при отправке формы...
    };

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img2} className="card-img-top" alt="..." />
                <div className="card-body ft">
                    <div>
                        <h5 className="card-title">{props.data.name}</h5>
                        <p className="card-text">
                            Район: {props.data.raion}. Найден {props.data.date}. Вид:{" "}
                            {props.data.kind}.
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-primary ff" onClick={handleShowForm}>
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    {/* Здесь размещайте необходимые поля формы */}
                </form>
            )}
        </div>
    );
};

export default Cards;


