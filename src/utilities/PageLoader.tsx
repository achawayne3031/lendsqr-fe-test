


import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './util.scss'


export const PageLoader = () => {
  return (
    <div>
          <div className='loader-wrapper'>
            <CircularProgress color="inherit" />
          </div>
    </div>
  )
}
