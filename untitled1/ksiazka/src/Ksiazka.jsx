import React from "react";
import "./Ksiazka.css";

const Ksiazka = props =>
    (
        <div className="Ksiazka">
        {props.autor}: <b>{props.tytul}</b> stron: {props.stron}
        </div>
    )
export default Ksiazka;