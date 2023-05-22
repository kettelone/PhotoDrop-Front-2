import styled from 'styled-components'

const Header = styled.header``

const Img = styled.img`max-height: 4em;`
const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 2em;
`
const GridContainer = styled.div`
	display: grid;
	justify-content: center;
	column-gap: 1em;
	grid-template-columns: auto auto auto;
	padding: 0.5em;
	margin-top: 3em;
`
const GridItem = styled.div`padding: 0.5em;`

const NoImagesContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2em;
`

const GoBackContainer = styled.div`
	position: absolute;
	left: 1%;
	top: 128px;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`

export {
	ButtonContainer,
	Header,
	GridContainer,
	GridItem,
	Img,
	NoImagesContainer,
	GoBackContainer
}
