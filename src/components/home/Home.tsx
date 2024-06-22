import { Button } from '@mantine/core'
import '@mantine/core/styles.css';
import React from 'react'

type Props = {}

export default function Home({}: Props) {
    return (
        <>
            <h1>Weirdough NJ</h1>
            <Button variant="filled">Button</Button>
        </>
    )
}