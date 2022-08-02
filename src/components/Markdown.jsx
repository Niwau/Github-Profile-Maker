import styled from "styled-components"
import { useContext, useState } from "react"
import { markdownContext } from "../context/markdownContext"

export const Markdown = ( ) => {

    const [markdown, setMarkdown] = useContext(markdownContext)

    const handleChange = (e) => {
        setMarkdown(e.target.value)
    }

    return (
        <Input 
            onChange = {handleChange}
            value = {markdown}
        />
    )
}

const Input = styled.textarea`
    background-color: var(--blue);
    height: 90vh;
    padding: 30px;
    outline: none;
    resize: none;
    border: none;
`