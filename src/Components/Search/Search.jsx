import React from "react";
import './Search.css'

function Search(props) {
    return(
        <div className="search">
            <form className="searchForm" onSubmit={props.function}>
                <label htmlFor="bandaS">Pesquise por uma banda: </label>
                <input type="text" name="bandS" placeholder="Ex: Wesley Safadão"/>
                <button type="submit">Pesquisar</button>
            </form>
        </div>
    )
}
export default Search;