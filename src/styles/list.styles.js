import styled from "styled-components"

export const UnOrderList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border: 1px solid ${({ borderColor }) => borderColor};
    padding: 0.4rem;
    border-radius: 4px;
    margin: 10px 0;
`
export const List = styled.li`
    width: 100%;
`