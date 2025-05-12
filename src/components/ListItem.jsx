import React from 'react'

const ListItem = ({ movie, index,  remove }) => {
    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <h5 className='me-3'>{movie.title}</h5>
                    <div className="badge text-bg-secondary">{movie.genre}</div>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => remove(index)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default ListItem
