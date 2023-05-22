import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 25em;
  height: 3em;
  border-radius: 5px;
  background-color: #321acd;
  color: white;
  cursor: pointer;
  border:none;

  &:hover {
    opacity:0.7
    ;
  }
`
export default StyledButton;