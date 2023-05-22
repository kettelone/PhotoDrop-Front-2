import React, {
  useEffect,
  // useState
} from 'react';
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import AwsS3 from '@uppy/aws-s3'
import { useParams, useNavigate } from "react-router-dom"
import photoService from '../../../service/photoService';
import camera from '../../../assets/cameraLogo.png'
import { HeaderContainer } from '../../commom/HeaderContainer/HeaderContainer';
// import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  Header,
  // GridContainer,
  // GridItem,
  Img,
  // NoImagesContainer,
  ButtonContainer, GoBackContainer
} from './components';
import goBackBtn from '../../../assets/left.png'
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from '../../../utils/consts/conts';
import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import checkToken from '../../../utils/consts/checkJWT';
// import OnePhoto from '../../modal/onePhoto/OnePhoto';
// import { update } from '../../../app/oneAlbumSlice/oneAlbumSlice';

let albumId:undefined|string 
// let url = ''

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
    const { personPhone, key } = file.meta
    if (typeof key === 'string' && typeof personPhone === 'string') {
      const photoId = key.substring(key.lastIndexOf('/') + 1)
      const response = await photoService.addPerson(photoId, personPhone)
    }
  }
});


const OneAlbum = () => {

  // const [loading, setLoading] = useState(false);
  // const[oneLoading, setOneLoading] = useState(false)
  // const [imageUrl, setImageUrl] = useState('')
  // const { photos } = useAppSelector(state => state.oneAlbumUpdate)
  // const dispatch = useAppDispatch()

  const { id } = useParams()
  albumId = id
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = checkToken();
    if (loggedInUser) {
      // console.log(loggedInUser)
      // const fetchData = async () => {
      //   setLoading(true)
      //   if (id) {
      //     const data = await photoService.getAll(id)
      //     dispatch(update(data?.data))
      //     setLoading(false)
      //   }
      // }
      // fetchData()
      document.getElementById('select-file-button')?.classList.add("show")
    } else {
      navigate(LOGIN_ROUTE);
    }
    }, [])
  
  const goBack = () => {
    navigate(DASHBOARD_ROUTE)
  }

  // const handlePhoto = async (event: React.SyntheticEvent<EventTarget>) => {
  //   setOneLoading(true)
  //   if (!(event.target instanceof HTMLImageElement)) {
  //     return;
  //   }
  //   const { name } = event.target.dataset
  //   if (name) {
  //     url = await photoService.getOne(name)
  //     setImageUrl(url)
  //     document.body.classList.add('modal-open')
  //     document.getElementById('onePhoto')?.classList.add('show')
  //   }
  // }
  
  return (
    <div>
      {/* <OnePhoto url={imageUrl} oneLoading={oneLoading } /> */}
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
      {/*
      {
        loading
          ? <Spinner/>
          : <GridContainer>
            {
              photos && photos.length > 0
                ? photos.map(photo =>
                  <GridItem key={photo.url}>
                    <img
                      src={photo.url}
                      alt="photo"
                      className='photos'
                      data-name={photo.photoID}
                      onClick={handlePhoto}
                    />
                  </GridItem>)
                : <NoImagesContainer>
                  There is no images yet
                </NoImagesContainer>
            }
          </GridContainer>
      } */}
    </div>
  );
};

export default OneAlbum;