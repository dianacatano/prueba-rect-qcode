import React, { useState } from "react";
import NumberFormat from "react-number-format";

export const InputComp = (props) => {
    const { className, placeholder, ref, value, onChange } = props;

    return ( <
        NumberFormat className = { className }
        placeholder = { placeholder }
        ref = { ref }
        thousandSeparator = { "." }
        decimalSeparator = { "," }
        value = { value }
        onValueChange = {
            (values) => {
                onChange(values);
            }
        }
        />
    );
}