import React, { useEffect, useState } from 'react';
import auth from '../../../service/loginService'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks';
import { DASHBOARD_ROUTE } from '../../../utils/consts/conts';
import ModalAuthInvalid from '../../modal/authInvalid/AuthInvalid';
import StyledButton from '../../commom/Button/Button';
import Input from '../../commom/Input/Input';
import { update } from '../../../app/userSlice/userSlice';
import Spinner from '../../commom/Spinner/Spinner';
import { Wrapper, Container, Fields, Empty } from './components';
import checkToken from '../../../utils/consts/checkJWT';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isDisabled, setIsDisbaled] = useState(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = checkToken();
    if (loggedInUser) {
      navigate(DASHBOARD_ROUTE);
    }
    document.getElementById('select-file-button')?.classList.remove("show")
  }, [])


  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLogin(event.target.value)
  }

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setPassword(event.target.value)
  }
  
  const handleLogin = async () => {
    if (login && password && login.length > 1 && password.length >1) {
      setLoading(true)
      setIsDisbaled(true)
      const id = await auth.login(login, password)
      if (id) {
        dispatch(update({ id }))
        navigate(DASHBOARD_ROUTE, { replace: true })
      } else {
        setModalIsOpen(true)
        setTimeout(() => {
          setModalIsOpen(false)
        }, 4000)
      }
      setLogin('')
      setPassword('')
      setLoading(false)
      setIsDisbaled(false)
    }
  }

    return (
      <div>
        {
          loading
            ?
            <Spinner />
            :
            <div>
              <Wrapper>
                <Container>
                  <Fields>
                    <Input type="text" placeholder='Login' onChange={handleLoginInput} />
                    <Input type="password" placeholder='Password' onChange={handlePasswordInput} />
                  </Fields>
                  <div className="loginBtn">
                    <StyledButton
                      disabled={isDisabled}
                      onClick={handleLogin}
                    >
                      Login
                    </StyledButton>
                    {
                    modalIsOpen
                      ? <ModalAuthInvalid />
                      : <Empty/>
                    }
                  </div>
                </Container>
              </Wrapper>
            </div>
        }
      </div>
    );
};

export default Login;