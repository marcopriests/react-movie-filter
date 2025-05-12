import React from 'react'
import ListItem from './ListItem'

import { useState, useEffect } from 'react'

const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
]


const Main = () => {
    const [movieValue, setMovieValue] = useState('')
    const [genreValue, setGenreValue] = useState('')
    const [moviesArr, setMoviesArr] = useState(movies)
    const [selectValue, setSelectValue] = useState(0)

    useEffect(() => {

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setMoviesArr([...moviesArr, { title: movieValue, genre: genreValue }])
        setMovieValue('')
        setGenreValue('')
    }

    const handleRemove = (i) => {
        moviesArr.splice(i, 1)
        setMoviesArr([...moviesArr])
    }

    return (
        <div className='container my-5 p-5'>
            <h1 className='mb-5'>Movies Watch List</h1>

            <select className="form-select mb-5" aria-label="Default select example">
                <option selected>Filter by genre</option>
                <option value="1" >Fantascienza</option>
                <option value="2">Thriller</option>
                <option value="3">Romantico</option>
                <option value="4">Azione</option>
                <option value="5">test</option>
            </select>

            <ul className="list-group">
                {moviesArr.map((movie, i) => {
                    return <ListItem movie={movie} index={i} remove={handleRemove} key={`movie-${i}`} />
                })}
            </ul>

            <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-between my-5'>
                    <input type="text" className="form-control" placeholder='Add movie' value={movieValue} onChange={e => setMovieValue(e.target.value)} />
                    <input type="text" className="form-control" placeholder='Add genre' value={genreValue} onChange={e => setGenreValue(e.target.value)} />
                    <button className="btn btn-primary">ADD</button>
                </div>
            </form>
        </div>
    )
}

export default Main
