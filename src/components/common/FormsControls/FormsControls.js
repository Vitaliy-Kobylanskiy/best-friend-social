import React from "react";
import cl from './FormsControls.module.scss';

export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;
    return (
        <div className={cl.formControl + '' + hasError ? cl.error : ''}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span className={cl.errorSpan}>{meta.error}</span>}
        </div>
    )
}