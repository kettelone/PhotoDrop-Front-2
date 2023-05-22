import React from 'react'
import albumIcon from './AlbumIcon.png'
import { Link } from 'react-router-dom'
import {AlbumContainer, IconContainer, Field,FieldsContainer} from './components'
interface Album { albumName: string, location: string , id:string }

const AlbumSummary = (props: Album) => {

	return (
		<Link to={`/album/${props.id}`}>
			<AlbumContainer>
				<IconContainer>
					<img src={albumIcon} alt="album icon" />
				</IconContainer>
			<FieldsContainer>
				<Field><b>{props.albumName}</b></Field>
				<Field>{props.location}</Field>
			</FieldsContainer>
			</AlbumContainer>
		</Link>
	)
}

export default AlbumSummary
