import styled from "styled-components";

export const Options = ( {children} ) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    border: 1px solid var(--blue);
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    padding: 10px;
`