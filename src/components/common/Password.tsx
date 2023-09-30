import styled from "styled-components"
import {InputHTMLAttributes} from "react"
import BaseInput from "."

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string
    
}

const Pass = ({placeholder}: InputProps) =>{
    return(
        <div>
            <BaseInput placeholder={placeholder} type="password"/>
        </div>
    )
}

export default Pass;