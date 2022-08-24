import React from 'react'
import { useGetAllCharactersQuery } from './characterListAPI'
import CharacterCard from './CharacterCard'
import Grid from '@mui/material/Unstable_Grid2'

export function CharacterList () {
  const { data } = useGetAllCharactersQuery()

  return (
    <Grid container justifyContent="center">
      {data.map(character => {
        return (
          <Grid
            xs={12}
            md={4}
            lg={3}
            direction='column'
            display='flex'
            justifyContent='center'
            alignItems='center'
            mt={2}
            mb={2}
            key={character.char_id}
          >
            <CharacterCard
              name={character.name}
              id={character.char_id}
              img={character.img}
              nickname={character.nickname}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CharacterList
