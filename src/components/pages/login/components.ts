import styled from 'styled-components'

const Wrapper = styled.div`
	//https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`

const Container = styled.div`margin: auto;`
const Fields = styled.div`
	display: flex;
	flex-direction: column;
`
const Empty = styled.div`
	height: 56px;
	width: 100%;
	margin-top: 1.1em;
`
export { Wrapper, Container, Fields, Empty }
