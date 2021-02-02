import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";
import { InputComp } from './InputComp.js';


export const Form = (propsF) => {

    const { register, handleSubmit } = useForm();

    const [stateValor, setStateValor] = useState({ formattedValue: "" });
    const [stateTrm, setStateTrm] = useState({ formattedValue: "" });
    const [stateSelect, setStateSelect] = useState("default");

    const [newData, setNewData] = useState({
        idS: "",
        valor: "",
        trm: "",
    })

    const handleInputChange = (event) => {

        setNewData({
            ...newData,
            [event.target.name]: event.target.value
        })
    }


    const onSubmit = (data) => {
        console.log('stateSelect:' + stateSelect);

        if (stateValor.formattedValue === "" || stateSelect === "default" || stateSelect === "Seleccione") {
            alert("Los campos marcados con asterisco son obligatorios");
        } else {
            data.valor = stateValor.formattedValue;
            data.trm = stateTrm.formattedValue;

            propsF.callback(data);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };

            fetch('https://httpbin.org/post', requestOptions)
                .then(response => response.json())
                .then(dataFetch => {
                    setNewData(dataFetch.data)
                    localStorage.setItem("data", JSON.stringify(dataFetch.data));
                    console.log(dataFetch);
                    setNewData({
                        idS: "",
                        valor: "",
                        trm: "",
                    });
                });
        }
    }


    const delInput = () => {

        setNewData({
            idS: "",
            valor: "",
            trm: "",
        });

        setStateValor({ formattedValue: "" });
        setStateTrm({ formattedValue: "" });
        setStateSelect("default");
    }

    return ( <
        Fragment >
        <
        h1 > Formulario < /h1> <
        p class = "text-danger" > * Campo obligatorio < /p> <br/ > <
        form onSubmit = { handleSubmit(onSubmit) } >

        <
        div className = "col-md-3" > <
        label htmlFor = "valor" > Valor < span class = "text-danger" > * < /span> <
        InputComp className = "form-control my-2"
        placeholder = "Ingrese valor"
        onChange = {
            (e) => setStateValor(e)
        }
        value = { stateValor.formattedValue }
        ref = {
            register({
                required: { value: true }
            })
        }
        /> < /
        label > < /
        div >

        <
        div className = "col-md-3" > <
        label htmlFor = "sel" > Prueba < span class = "text-danger" > * < /span> <
        select className = "form-select my-2"
        name = "idS"
        id = "idS"
        defaultValue = "Seleccione"
        onChange = {
            (e) => setStateSelect(e.target.value)
        }
        value = { stateSelect }
        ref = {
            register({
                required: { value: true },
            })
        } >
        <
        option > Seleccione < /option> <
        option value = "1" > Prueba1 < /option> <
        option value = "2" > Prueba2 < /option> <
        option value = "3" > Prueba3 < /option><
        option value = "4" > Prueba4 < /option> < /
        select > < /label > < /
        div >


        <
        div className = "col-md-3" >
        <
        label htmlFor = "valor" > TRM <
        InputComp className = "form-control my-2"
        placeholder = "Ingrese TRM"
        onChange = {
            (e) => setStateTrm(e)
        }
        value = { stateTrm.formattedValue }
        ref = {
            register({
                required: false
            })
        }
        /> < /
        label > < /
        div >

        <
        div className = "col-md-3" >
        <
        button className = "btn btn-primary"
        type = "submit" > Guardar < /button>  <
        button className = "btn btn-secondary"
        type = "button"
        name = "delInput"
        value = "delete"
        onClick = { delInput } > Borrar < /button>  < /
        div >
        <
        /form> < /
        Fragment >
    );
}

export default Form;