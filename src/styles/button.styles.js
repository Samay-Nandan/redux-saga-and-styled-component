import styled from "styled-components"
import { Button } from "../components/button"

export const ButtonStyled = styled(Button)`
    padding: 0.4rem 0.9rem;
    background: none;
    outline: none;
    border: none;
    border: 1px solid ${({ borderColor }) => borderColor };
    color: ${( { color } ) => color };
    cursor: pointer;
    background: ${({ bg }) => bg};
    border-radius: 4px;
    transition: 0.3s ease-in-out;
    &:hover {
        background: ${({ bghover }) => bghover };
        color: ${({ colorhover }) => colorhover };
        border: 1px solid ${({ borderhover }) => borderhover };
    }
`
