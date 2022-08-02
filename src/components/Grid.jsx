import styled from "styled-components"

export const Grid = ( {children} ) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin: 12px;
    gap: 12px;
`