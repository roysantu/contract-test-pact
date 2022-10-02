import React from "react";
// import axios from "axios";

const ItemList = (props) => {

console.log("props>>>>>>>>>", props)
    return (<ul>
        {
            props.movies.map((movie, index) => (<li key={index}>{movie.title}</li>)
                // return <li key={index}>{movie.title}</li>
            )
        }
        
    </ul>)
}

export default ItemList;