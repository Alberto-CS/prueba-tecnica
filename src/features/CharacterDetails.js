import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Grid
} from '@mui/material'
import {
  useGetAllCharactersQuery,
  useGetQuoteByAuthorQuery
} from './characterListAPI'
import { useTranslation } from 'react-i18next'
import CasinoIcon from '@mui/icons-material/Casino'

const styles = {
  spoiler: {
    backgroundColor: 'black',
    color: 'white'
  },
  textBB: {
    color: '#124026',
    fontFamily: 'BreakingBad',
    fontSize: { xs: 20, md: 40, lg: 60 }
  },
  titleText: {
    color: 'black',
    fontSize: { xs: 20, md: 30, lg: 60 }
  },
  bodyText: {
    color: 'black',
    fontSize: { xs: 12, md: 20, lg: 40 }
  }
}

export function CharacterDetails (props) {
  const [isHidden, setShowSpoiler] = useState(true)
  const [character, setCharacter] = useState({ name: '' })
  const { data } = useGetAllCharactersQuery()
  const { id } = useParams()
  const { t } = useTranslation()

  useLayoutEffect(() => {
    if (data)
      setCharacter(data.find(character => String(character.char_id) === id))
  }, [data, id])

  const [randomQuote, getRandomQuote] = useState(0)
  const characterQuotes = useGetQuoteByAuthorQuery(character.name)

  useEffect(() => {
    if (characterQuotes.data && characterQuotes.data.length > 0) {
      getRandomQuote(
        characterQuotes.data[
          Math.floor(Math.random() * characterQuotes.data.length)
        ]
      )
    }
  }, [characterQuotes.data])

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component='img'
        sx={{ width: 'auto', height: '90vh', maxWidth: '60vw' }}
        image={character.img}
        alt={character.name}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item ml={4}>
              <Typography variant='h2' component='h2' sx={styles.textBB}>
                {t('name')}
              </Typography>
            </Grid>
            <Grid item mr={4}>
              <Typography variant='h2' component='h2' sx={styles.titleText}>
                {character.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item ml={4}>
              <Typography variant='h2' component='h2' sx={styles.textBB}>
                {t('nickname')}
              </Typography>
            </Grid>
            <Grid item mr={4}>
              <Typography variant='h2' component='h2' sx={styles.titleText}>
                {character.nickname}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item ml={4}>
              <Typography variant='h2' component='h2' sx={styles.textBB}>
                {t('birthday')}
              </Typography>
            </Grid>
            <Grid item mr={4}>
              <Typography variant='h4' component='h4' sx={styles.bodyText}>
                {character.birthday}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item ml={4}>
              <Typography variant='h2' component='h2' sx={styles.textBB}>
                {t('status')}
              </Typography>
            </Grid>
            <Grid item mr={4}>
              <Typography variant='h4' component='h4' sx={styles.bodyText}>
                <div onClick={() => setShowSpoiler(false)}>
                  {isHidden ? t('spoiler') : character.status}
                </div>
              </Typography>
            </Grid>
          </Grid>

          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item ml={4}>
              <Typography variant='h2' component='h2' sx={styles.textBB}>
                {t('seasons')}
              </Typography>
            </Grid>
            <Grid item mr={4}>
              <Typography variant='h4' component='h4' sx={styles.bodyText}>
                {character.appearance ? character.appearance.join(',') : null}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Grid item ml={4}>
              <Typography variant='h2' component='h2' sx={styles.textBB}>
                {t('actor')}
              </Typography>
            </Grid>
            <Grid item mr={4}>
              <Typography variant='h4' component='h4' sx={styles.bodyText}>
                {character.portrayed}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            direction='row'
          >
            <Grid item xs={1}>
              {characterQuotes.data && characterQuotes.data.length > 0 ? (
                <IconButton
                  sx={{ color: '#124026' }}
                  onClick={() =>
                    getRandomQuote(
                      characterQuotes.data[
                        Math.floor(Math.random() * characterQuotes.data.length)
                      ]
                    )
                  }
                >
                  <CasinoIcon />
                </IconButton>
              ) : null}
            </Grid>
            <Grid item xs>
              <Typography variant='body' component='div'>
                {characterQuotes.data && characterQuotes.data.length > 0
                  ? randomQuote.quote
                  : ''}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CharacterDetails
