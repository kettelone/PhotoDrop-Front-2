import styled from "styled-components";

const AlbumContainer = styled.div`
  display: flex;
   border: 1px solid black;
   margin: 2em 0em;
   padding: 1em 2em;
   &:hover{
    background: rgba(50, 46, 46, 0.5);
    color:white;
    border-color:white;
   }
`

const IconContainer = styled.div`
`
const FieldsContainer = styled.div`
  padding:0 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Field = styled.div`
  padding: 0.5em;
  font-size:18px;
`

export {AlbumContainer, IconContainer, FieldsContainer, Field}