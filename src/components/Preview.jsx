import styled from "styled-components"
import { useContext } from "react"
import { markdownContext } from "../context/markdownContext"
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'

export const Preview = ( ) => {

    const [markdown, setMarkdown] = useContext(markdownContext)

    return (
        <Container>
            <ReactMarkdown 
                rehypePlugins={[rehypeRaw]} 
                children={markdown}
            />
        </Container>
    )
}

const Container = styled.div`
    height: 90vh;
    padding: 30px;
    border: 1px solid var(--blue);
`