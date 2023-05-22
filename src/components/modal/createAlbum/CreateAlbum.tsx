import React, {useState} from 'react';
import StyledButton from '../../commom/Button/Button';
import Input from '../../commom/Input/Input';
import album from '../../../service/albumService'
import closeIcon from './close.png'
import { useAppDispatch } from '../../../app/hooks';
import { close } from '../../../app/modalSlice/modalSlice';
import Spinner from '../../commom/Spinner/Spinner';
import {
  CloseBtn,
  InputContainer,
  Header,
  HeaderContainer,
  Wrapper,
  Container,
  SuccesModal,
  FailModal
} from './components'
import { addAlbum } from '../../../app/allAlbumsSlice/allAlbumsSlice';

const CreateAlbum = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string | undefined>()
  const [location, setLocation] = useState<string | undefined>()
  const [date, setDate] = useState<string | undefined>()
  const dispatch = useAppDispatch()

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setName(event.target.value)
  }
  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setLocation(event.target.value)
  }
  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setDate(event.target.value)
  }

  const handleSave = async () => {
    if (name && name.length > 0 &&
      location && location.length > 0 &&
      date && date.length > 0) {
      setLoading(true)
      try {
        await album.createAlbum(name, location, date)
        document.getElementById("success-modal")?.classList.add('show')
        setName(undefined)
        setLocation(undefined)
        setDate(undefined)
        setLoading(false)
        setTimeout(() => {
          document.getElementById("success-modal")?.classList.add('show')
          dispatch(close())
        },2000)
        setTimeout(() => {
          dispatch(addAlbum())
        }, 2000)
      } catch(e) {
        setLoading(false)
        document.getElementById("fail-modal")?.classList.add('show')
        setTimeout(() => {
          document.getElementById("fail-modal")?.classList.remove('show')
          dispatch(close())
        }, 2000)
      }
      await album.createAlbum(name, location, date)
    }
  }
  const closeModal = () => {
    dispatch(close())
  }
  return (
    <Wrapper>
      <SuccesModal id='success-modal'>Album was created succesfully</SuccesModal>
      <FailModal id='fail-modal'>Failed to create the album</FailModal>
      {loading
        ?<Spinner/>
        : <Container>
          <HeaderContainer>
            <Header>LOGO</Header>
            <CloseBtn onClick={closeModal}>
              <img src={closeIcon} alt='close' width={'20px'} />
            </CloseBtn>
          </HeaderContainer>
          <InputContainer>
            <Input
              placeholder='Name'
              type="text"
              name="name"
              required
              onChange={handleName}
            />
            <Input
              placeholder='Location'
              type="text"
              name="location"
              required
              onChange={handleLocation}
            />
            <Input
              placeholder='Datapicker'
              type="date"
              name="date"
              required
              onChange={handleDate}
            />
            <StyledButton
              type="button"
              onClick={handleSave}>
              Save
            </StyledButton>
          </InputContainer>
        </Container>
      }
    </Wrapper>
  );
};

export default CreateAlbum;