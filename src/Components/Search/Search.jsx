import React from "react";

function Search(props) {
    return(
        <div className="Search">
            <form onSubmit={props.function}>
                <label htmlFor="bandaS">Pesquisar: </label>
                <input type="text" name="bandS"/>
                <button type="submit">Pesquisar</button>
            </form>
        </div>
    )
}
export default Search;