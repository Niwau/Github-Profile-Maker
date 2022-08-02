import styled from "styled-components"

export const Properties = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 12px;
`