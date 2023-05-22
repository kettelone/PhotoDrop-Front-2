import styled from "styled-components";

const Wrapper = styled.div`
  display:none;
  background-color: #00000080;
  position: fixed;
  z-index:10;
  height:100vh;
  width:100vw;
`

const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  width:100%;
  height:100%;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
`
export { Wrapper, Container }