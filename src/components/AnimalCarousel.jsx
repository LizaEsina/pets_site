import React from 'react';
import imj1 from '../image/1.jpg'
function AnimalCarousel() {
    return (

        <div>
                <div className="carousel-item active">
                <img src={imj1} className="d-block w-100"  alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                 <h5 className="news" >Голубь  (Найден 13.04.23) </h5>
                    <p className="news" > Пропавший 11.01.22 голубь вернулся домой</p>
        </div>
</div>
</div>

    );
}
export default AnimalCarousel;
