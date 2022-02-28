import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Lojas({nome, link, lat, lng}) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBiubbSwEPFvXm4iWf2SFMb_HTyoclOeEY"
  })

  return (
    <div className='loja hover-scale'>
        {
          isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: '150px', height:'150px'}}
              center={{
                lat: -23.504381607914134,
                lng:  -46.834112938368996
              }}
              zoom={15}
            >
            </GoogleMap>
        ) : <></>
        }
        <a href={link} target='_blank' >{nome}</a>
    </div>
  )
}
