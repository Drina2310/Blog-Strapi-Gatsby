import React from 'react'
import { Button } from 'semantic-ui-react'
import BlogLayout from '../layouts/BlogLayout'

export default function Home() {
  return (
    <BlogLayout>
        <h1>Estamos en la HOME</h1>
        <h2>Holaaaa</h2>

        <p>ESTO ES UN PARRAFO</p>

        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
    </BlogLayout>
  )
}
