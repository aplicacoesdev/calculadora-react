import React from 'react'
import '../styles/Button.css'

type ButtonProps = {
    label: string
    operation?: boolean
    double?: boolean
    triple?: boolean
    click: (label: string) => void
}

export default function Button(props: ButtonProps) {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}