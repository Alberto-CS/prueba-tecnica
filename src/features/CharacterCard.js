import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const styles = {
  card: {
    width: 250
  },
  cardTitle: {
    flexGrow: 1,
    color: '#5d4128'
  },
  cardSubtitle: {
    flexGrow: 1,
    color: 'black'
  }
}

export default function CharacterCard (props) {
  const { id, name, nickname, img } = props
  return (
    <Link to={'character/' + id}>
      <Card id={id} sx={styles.card}>
        <CardMedia component='img' image={img} height={400} alt={name} />
        <CardContent>
          <Typography variant='h5' component='div' sx={styles.cardTitle}>
            {name}
          </Typography>
          <Typography
            variant='subtitle1'
            component='div'
            sx={styles.cardSubtitle}
          >
            {nickname}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
