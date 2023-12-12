import React from "react";
import Header from "../components//heder";
import Footer from "../components/footer";
import SearchQuick from "../components/SearchQuick";

const SearchP = ()=>{
    return(
        <div>
            <Header/>
            <h2 className="text-center text-white bg-primary m-2">Страница с результатами поиска животных</h2>
            <SearchQuick/>
            <Footer/>
        </div>
    );
};
export default SearchP;