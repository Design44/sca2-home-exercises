import React from "react"
import { Input } from "./styles"

// TODO: Create a FormInput component that used the styled component Input
// and whatever extra labels or text-based components and containers you wish!
const FormInput = ({ update, value, type, title, placeholder }) => (
    <Input
        styled={Input}
        placeholder={placeholder}
        title={title}
        type={type}
        value={value}
        onChange={event => update(event.target.value)}
    />
)

export default FormInput
