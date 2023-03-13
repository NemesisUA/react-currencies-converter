import React from 'react'
import Form from '../components/Form'

export const HomePage = () => {
  return (
    <main>
      <div className="wrapper">
        <section className="main-section">
          <h2>Curensies to convert</h2>
          <Form />
        </section>
      </div>
    </main>
  )
}

export default HomePage