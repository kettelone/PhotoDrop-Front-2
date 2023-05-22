import React, { useState } from 'react';
import Spinner from '../../commom/Spinner/Spinner';
import { Wrapper, Container } from './components'
import styled from 'styled-components';
import closeIcon from '../../../assets/close.png'


const Image = styled.img`
  object-fit:contain ;
  width:100%;
  height:95%;
`
const CloseButton = styled.button`
  position:absolute;
  top:0;
  right:0;
  background:none;
  border:none;
  cursor: pointer;

  &:hover{
    opacity:0.6;
  }
`
const BtnImg = styled.img`
  width:2em;
  height:2em;
  margin:1em;
`
const OnePhoto = (props:{url:string, oneLoading:boolean}) => {

  const closeModal = () => {
    document.getElementById('onePhoto')?.classList.remove('show')
    document.body.classList.remove('modal-open')

  }

  return (
    <Wrapper id='onePhoto'>
      {/* {props.oneLoading */}
         <Spinner />
         <Container>
          <CloseButton
            id='closePhoto'
            onClick={closeModal}
          >
            <BtnImg src={closeIcon} alt="close-btn" />
          </CloseButton>
          <Image src={props.url} alt="full-photo" />
        </Container>
      {/* } */}
    </Wrapper>
  );
};

export default OnePhoto;