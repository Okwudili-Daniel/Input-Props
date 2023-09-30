import styled from "styled-components"
import {InputHTMLAttributes} from "react"
import BaseInput from "."

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string
    
}

const Mail = ({placeholder}: InputProps) =>{
    return(
        <div>
            <BaseInput placeholder={placeholder} type="email"/>
        </div>
    )
}

export default Mail;