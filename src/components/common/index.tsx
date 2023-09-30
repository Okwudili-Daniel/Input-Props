import styled from "styled-components"
import {InputHTMLAttributes} from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string
    type : string
}

const BaseInput = ({placeholder, type}: InputProps) =>{
    return(
        <div>
            <Input placeholder={placeholder} type={type}/>
        </div>
    )
}

export default BaseInput;
const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 12px;
`