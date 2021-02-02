import React from "react";


export const Table = propsT => ( <
    tr key = { propsT.dataR.idS } >
    <
    td > { propsT.dataR.idS } < /td> <
    td > { propsT.dataR.valor } < /td> <
    td > {
        (() => {
            switch (propsT.dataR.idS) {
                case "1":
                    return "Prueba1";
                case "2":
                    return "Prueba2";
                case "3":
                    return "Prueba3";
                case "4":
                    return "Prueba4";
                default:
                    return "Prueba1"
            }
        })()
    }

    <
    /td> <
    td > { propsT.dataR.trm } < /td> < /
    tr >

);