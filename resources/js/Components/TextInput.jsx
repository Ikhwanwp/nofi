import React, { useEffect, useRef } from 'react';
import Proptypes from 'prop-types';
import '../../css/textInput.css';

// Untuk Validasi -> Proptypes
TextInput.propTypes = {
    type: Proptypes.oneOf(["text", "email", "password", "number", "file"]),
    name: Proptypes.string,
    value: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
    defaultValue: Proptypes.oneOfType([Proptypes.string, Proptypes.number]),
    className: Proptypes.string,
    variant: Proptypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: Proptypes.string,
    required: Proptypes.bool,
    isFocused: Proptypes.bool,
    handleChange: Proptypes.func,
    placeholder: Proptypes.string,
    isError: Proptypes.bool
}

export default function TextInput({
    type = "text",
    name,
    value,
    defaultValue,
    className,
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"
                    } input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}
