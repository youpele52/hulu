import Movie from '../components/Movie'
// FlipMove add some fluidly animation when animating llist of items more here https://www.npmjs.com/package/react-flip-move
import FlipMove from 'react-flip-move'

// this uses server side rendering
function Movies({ movies }) {
  //   console.log(movies)
  return (
    // 3xl: is not part of default tailwindcss, i define it myself under
    // tailwind.config.js file undertheme: {extend: {
    // in 3xl: ie in larger screens say 4k screens the page renders with flexbox instead of css grid
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3  3xl:flex flex-wrap justify-center'>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </FlipMove>
  )
}

export default Movies
