import Head from 'next/head'
import Image from 'next/image'
import api from 'services/api'

import { useEffect, useState } from 'react'

import logo from 'assets/images/logo.png'

import Grid from 'components/Grid'
import List from 'components/List'
import Mode from 'components/Mode'
import Pagination from 'components/Pagination'

import { Container } from 'styles/container'

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [mode, setMode] = useState('list')
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(0)
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState('')
  const limit = 20

  const handlePages = async newPage => {
    try {
      setPokemons([])
      let offset = (newPage - 1) * limit

      const { data } = await api.get(`pokemon/?offset=${offset}&limit=${limit}`)

      setPokemons(data.results)
      setPage(newPage)
      setCount(data.count)
      setNext(data.next)
      setPrev(data.previous)
    } catch (error) {
      // TODO: handle error
      console.log(error)
    }
  }

  const handleMode = newMode => {
    if (newMode !== mode) {
      setMode(newMode)
    }
  }

  useEffect(() => {
    handlePages(1)
  }, [])

  return (
    <div>
      <Head>
        <title>Pokédex</title>
      </Head>

      <main>
        <div className="bg-image"></div>

        <Container>
          <Image src={logo} alt="logo" />

          <Mode changeMode={mode => handleMode(mode)} />

          {mode === 'grid' ? (
            <Grid pokemons={pokemons} />
          ) : (
            <List pokemons={pokemons} />
          )}

          <Pagination
            page={page}
            prev={prev}
            next={next}
            changePage={page => handlePages(page)}
          />
        </Container>
      </main>
    </div>
  )
}
