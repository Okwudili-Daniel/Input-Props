import styled from "styled-components"
import {InputHTMLAttributes} from "react"
import BaseInput from "."

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string
    
}

const Test = ({placeholder}: InputProps) =>{
    return(
        <div>
            <BaseInput placeholder={placeholder} type="text"/>
        </div>
    )
}

export default Test;