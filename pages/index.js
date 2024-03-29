import Head from 'next/head'
import Header from '../components/Header'
import Movies from '../components/Movies'
import Nav from '../components/Nav'
import requests from '../utils/requests'

export default function Home({ movies }) {
  return (
    <div>
      {/* this head allows one to change the heading meta per page */}
      <Head>
        <title>Hulu </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* header */}
      <Header />
      {/* navbar */}
      <Nav />
      {/* body */}
      <Movies movies={movies} />
    </div>
  )
}

// telling NEXT that this page is going to be rendered on the server side
// this bit of code renders first on the server then tells the entire page ie Home to render
export async function getServerSideProps(context) {
  const genre = context.query.genre
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json())
  return {
    props: {
      movies: request.results,
    },
  }
}
