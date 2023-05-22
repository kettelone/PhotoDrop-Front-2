import styled from 'styled-components'

const Wrapper = styled.div`
	background-color: #00000080;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid black;
`

const HeaderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	border-bottom: 1px solid black;
	height: 4em;
	background-color: white;
`
const Header = styled.div``

const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	padding: 2em;
	background-color: white;
`

const CloseBtn = styled.button`
	position: fixed;
	left: 0;
	margin-left: 1em;
	padding: 1em 1em;
	border: none;
	background: none;
	cursor: pointer;
`

const SuccesModal = styled.div`
	text-align: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	width: 399px;
	height: 370px;
	font-size: 30px;
	background-color: beige;
	display: none;
`

const FailModal = styled.div`
	text-align: center;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	width: 399px;
	height: 370px;
	font-size: 30px;
	background-color: beige;
	display: none;
	background: rgb(250, 128, 114);
	color: white;
`
export {
	CloseBtn,
	InputContainer,
	Header,
	HeaderContainer,
	Wrapper,
	Container,
	SuccesModal,
	FailModal
}
