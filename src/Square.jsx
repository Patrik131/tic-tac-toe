import React from 'react'

export default function Square({ value, handleClick }) {
    return (
        <>
            <button onClick={handleClick}>{value}</button>
        </>
    )
}