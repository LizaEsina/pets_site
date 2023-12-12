import React from "react";
import Header from "../components//heder";
import Footer from "../components/footer";
import AnimalCarousel from "../components/AnimalCarousel";
import Cards from "../components/cards";
import SubscribeForm from "../components/SubscribeForm";

const Main = ()=>{
    let card = { name: "Олег", raion: "Приморский", date: "22.12.22", kind: "Альпака"}
    let card1 = { name: "Маркиза", raion: "Адмиралтейский" ,date: "14.12.23", kind: "Кошка"}
    let card2 = { name: "Рома", raion: "Адмиралтейский" ,date: "19.12.23", kind: "Козёл"}

    return(
        <div>
            <Header/>
            <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
            <div style={{width: '50%', margin: '0 auto'}}>
            <div  className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <AnimalCarousel/>
                <AnimalCarousel />
                <AnimalCarousel/>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
            </div>
            <h2 className="text-center text-white bg-primary m-2">Карточки найденных животных</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 w-75 m-auto">
            <Cards data = {card} />
                <Cards data = {card1} />
                <Cards data = {card2} />
            </div>
            <SubscribeForm/>
            <Footer/>
        </div>
    );
};
export default Main;