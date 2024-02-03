import React from 'react'

const button = (props) => {
    return (
        <a role='button' href={props.link} className='bg-mainColor px-5 py-2.5 text-white font-bold rounded'>
            {props.name}
        </a>
    )
}

export default button