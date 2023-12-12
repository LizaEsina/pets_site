import React from 'react';
class SearchResultsPage extends React.Component {
    render() {
        return (
            <div>
                <form>
                <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="animalName">Кличка</label>
                            <input type="text" className="form-control" id="animalName" placeholder="Кличка" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="animalType">Вид животного</label>
                            <input type="text" className="form-control" id="animalType" placeholder="Вид животного" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="additionalInfo">Дополнительная информация</label>
                            <textarea className="form-control" id="additionalInfo" placeholder="Дополнительная информация"></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="mark">Клеймо</label>
                            <input type="text" className="form-control" id="mark" placeholder="Клеймо" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="district">Район</label>
                            <input type="text" className="form-control" id="district" placeholder="Район" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="date">Дата</label>
                            <input type="date" className="form-control" id="date" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="contactNumber">Контактный номер телефона</label>
                            <input type="tel" className="form-control" id="contactNumber" placeholder="Контактный номер телефона" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Поиск</button>
                </form>
                <pre></pre>
                <pre></pre>
            </div>
        );
    }
}

export default SearchResultsPage;