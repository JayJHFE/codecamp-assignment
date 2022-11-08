import styled from '@emotion/styled'

export const EmotionInput = styled.input`
    border-color: red;
    background-color: yellow;
    color: black;
`

export const EmotionButton = styled.button`
    font-size: ${props => props.fz};
    background-color: ${props => props.bgc ? "yellow" : "black"};
`