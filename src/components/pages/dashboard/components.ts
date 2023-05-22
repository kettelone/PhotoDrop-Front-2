import styled from 'styled-components'

const Container = styled.div`
	overflow: auto;
	background-size: cover;
`
const BodyContainer = styled.div``
const Header = styled.header``

const AlbumsContainer = styled.div`padding: 2em 6em;`

const AddAlbumBtn = styled.div`
	position: absolute;
	right: 0;
	margin-right: 5em;
	width: 100px;
	display: flex;
	justify-content: center;
	height: 70px;
	cursor: pointer;
	border: 1px solid black;

	&:hover {
		background-color: rgba(50, 46, 46, 0.5);
		color: white;
		border-color: white;
	}
`

const Img = styled.img`max-height: 4em;`

const PlusSpan = styled.span`
	font-size: 100px;
	line-height: 40px;
`

export {
	Container,
	BodyContainer,
	Header,
	AlbumsContainer,
	AddAlbumBtn,
	Img,
	PlusSpan
}
