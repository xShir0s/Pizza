import React from "react";
import './przepis.css'

const Przepis = props =>
    (
        <div className="Przepis">
             {props.nazwa}:  ilość: {props.ilosc}
        </div>
    )
export default Przepis;