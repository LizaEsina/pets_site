import React from "react";

const AnimalCards = () => {
    return (
        <div>
            <div className="d-flex flex-row flex-wrap">
                <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: "300px", width: "45%"}}>
                    <img src="" className="w-75" alt="рисунок животного"/>
                    <p className="w-50 text-primary" style={{minWidth: "250px"}}>id:</p>
                    <p className="w-50" style={{minWidth: "250px"}}>14</p>

                    <p className="w-50 text-primary" style={{minWidth: "250px"}}>Вид животного:</p>
                    <p className="w-50" style={{minWidth: "250px"}}>Кошка</p>

                    <p className="w-50 text-primary" style={{minWidth: "300px"}}>Описание:</p>
                    <p className="w-50" style={{minWidth: "300px"}}>Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>

                    <p className="w-50 text-primary" style={{minWidth: "300px"}}>Номер чипа:</p>
                    <p className="w-50" style={{minWidth: "300px"}}>ca-001-spb</p>

                    <p className="w-50 text-primary" style={{minWidth: "300px"}}>Район:</p>
                    <p className="w-50" style={{minWidth: "300px"}}>Василиостровский</p>

                    <p className="w-50 text-primary" style={{minWidth: "300px"}}>Дата:</p>
                    <p className="w-50" style={{minWidth: "300px"}}>24-03-2020</p>
                </div>
            </div>
        </div>
    );
};

export default AnimalCards;