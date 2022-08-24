import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import TranslateIcon from '@mui/icons-material/Translate'

const styles = {
  navbar: {
    backgroundColor: '#124026',
    height: '10vh'
  },
  navbarItem: {
    textDecoration: 'none',
    flexGrow: 1,
    color: 'white'
  }
}

export default function NavBar () {
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    i18n.language === 'en'
      ? i18n.changeLanguage('es')
      : i18n.changeLanguage('en')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.navbar} position='static'>
        <Toolbar>
          <Typography
            variant='h5'
            component={Link}
            sx={styles.navbarItem}
            to={'/'}
          >
            {t('characters')}
          </Typography>
          <TranslateIcon onClick={changeLanguage} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
