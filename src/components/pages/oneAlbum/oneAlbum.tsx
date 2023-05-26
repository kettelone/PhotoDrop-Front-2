import React, { useEffect } from 'react';
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import AwsS3 from '@uppy/aws-s3'
import { useParams, useNavigate } from "react-router-dom"
import photoService from '../../../service/photoService';
import camera from '../../../assets/cameraLogo.png'
import { HeaderContainer } from '../../commom/HeaderContainer/HeaderContainer';
import {
  Header,
  Img,
  ButtonContainer, GoBackContainer
} from './components';
import goBackBtn from '../../../assets/left.png'
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from '../../../utils/consts/conts';
import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import checkToken from '../../../utils/consts/checkJWT';

let albumId: undefined | string 
let photoId : undefined | string

const uppy = new Uppy({
  id: 'uploader-aws',
  restrictions: {
    maxFileSize: 31457280,
    maxNumberOfFiles: 20,
    minNumberOfFiles: null,
    allowedFileTypes: ['image/*']
  }
})
  .use(Dashboard,
    {
      inline: false,
      target: '#uppy-dashboard',
      trigger: '#select-file-button',
      proudlyDisplayPoweredByUppy: false,
      closeModalOnClickOutside: true,
      browserBackButtonClose: true,
      metaFields: [
        {
          id: 'personPhone',
          name: 'Person Phone',
          placeholder: 'Provide person phone number',
        },
      ],
    }
  )
  .use(AwsS3, {
    async getUploadParameters(files): Promise<any> {
      try {
        if (albumId) {
          const response = await photoService.uploadPhotos(albumId, [
            //@ts-ignore
            files.data.name
          ])
          const { url, fields } = response
          photoId = response.photoId
          return {
            method: 'POST',
            url: url,
            fields: fields
          }
        }
      } catch (e) {
        console.log(e)
      }
    }
  })
uppy.on('upload-success', async (file, response) => {

  if (file) {
    const { personPhone} = file.meta
    console.log({ personPhone })
    console.log({photoId})
    if (typeof photoId === 'string' && typeof personPhone === 'string') {
      const response = await photoService.addPerson(photoId, personPhone)
      console.log(response)
    }
  }
});


const OneAlbum = () => {

  const { id } = useParams()
  albumId = id
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = checkToken();
    if (loggedInUser) {
      document.getElementById('select-file-button')?.classList.add("show")
    } else {
      navigate(LOGIN_ROUTE);
    }
    }, [])
  
  const goBack = () => {
    navigate(DASHBOARD_ROUTE)
  }

  
  return (
    <div>
      <HeaderContainer>
        <Header>
          <Img src={camera} alt="camera" />
        </Header>
      </HeaderContainer>
      <ButtonContainer>
        <GoBackContainer onClick={goBack}>
          <Img src={goBackBtn} alt="go back" />
        </GoBackContainer>
      </ButtonContainer>
    </div>
  );
};

export default OneAlbum;