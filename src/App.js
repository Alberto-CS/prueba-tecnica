import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { CharacterList } from './features/CharacterList'
import { CharacterDetails } from './features/CharacterDetails'
import NavBar from './app/NavBar'
import NotFound from './app/404'
import { useGetAllCharactersQuery } from './features/characterListAPI'
import { useTranslation } from 'react-i18next'
import { CircularProgress, Typography } from '@mui/material'
import { Helmet } from 'react-helmet'

const styles = {
  center: {
    textAlign: 'center',
    position: 'absolute',
    top: { xs: '32%', md: '22%', lg: '32%' },
    left: { xs: '40%', md: '40%', lg: '45%' },
    transform: 'translate(-50%, -50%)',
    color: 'white'
  }
}

function App () {
  const { error, isLoading } = useGetAllCharactersQuery()
  const { t } = useTranslation()

  return (
    <BrowserRouter>
      <Helmet>
        <title>Breaking Bad At Sistemas</title>
      </Helmet>
      <div className='App'>
        <NavBar />
        <Routes>
          {error ? (
            <Route
              exact
              path='/'
              element={
                <Typography variant='h1' component='h1' sx={styles.center}>
                  {t('error')}
                </Typography>
              }
            />
          ) : isLoading ? (
            <Route
              exact
              path='/'
              element={<CircularProgress sx={styles.center} size={150} />}
            />
          ) : (
            <Route exact path='/' element={<CharacterList />} />
          )}
          <Route exact path='/character/:id/*' element={<NotFound />} />
          <Route path='/character/:id' element={<CharacterDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
