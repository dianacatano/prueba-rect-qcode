import React, { useState, useEffect } from 'react';
import { Form } from './components/Form.js';
import { Banner } from './components/Banner.js';
import { Table } from './components/Table.js';

function App() {

    const [dataTrm, setDataTrm] = useState([
        // { idS: "1", valor: "10000", trm: "3500" },

    ]);


    useEffect(() => {
        let data = localStorage.getItem("idS");
        if (data != null) {
            setDataTrm(JSON.parse(data))

        } else {
            setDataTrm([
                // { idS: "1", valor: "13000", trm: "3500" },
            ]);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("idS", JSON.stringify(dataTrm));
    }, [dataTrm]);

    const addNewData = (addId) => {
        setDataTrm([...dataTrm, {
            idS: addId.idS,
            valor: addId.valor,
            trm: addId.trm
        }]);
    };


    const tableRows = () =>
        dataTrm.map(dataR => ( <
            Table dataR = { dataR }
            key = { dataR.idS }
            />
        ))

    return ( <
        div className = "container mt-5" >
        <
        div >
        <
        Banner /
        >
        <
        Form callback = { addNewData }
        / > < /
        div >
        <
        div >
        <
        br / >
        <
        div >
        <
        h4 className = "bg-primary text-white text-center h-4" > Listado Prueba < /h4> < /
        div > <
        table className = "table table-striped table-bordered" >
        <
        thead >
        <
        tr >
        <
        th > ID < /th>  <
        th > VALOR < /th>  <
        th > DESCRIPCIÓN < /th> <
        th > TRM < /th> < /
        tr > <
        /thead >   <
        tbody > { tableRows() } < /tbody> < /
        table > < /div > < /div >
    );
}

export default App;