import styled from "styled-components";
import { useContext } from "react";
import { editContext } from "../context/editContext";

const Image = () => {
    return (
        <Container>
            <input type="text" placeholder="Alternative text" />
            <input type="text" placeholder="Image url" />
        </Container>
    )
}

export const Edit = () => {

    const [options, setOptions] = useContext(editContext)

    switch(options){
        case "Image" : return <Image/>
    }

}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--blue);
    gap: 30px;
    padding: 30px 10px;
`