import React from 'react'

const AboutPage = () => {
  return (
    <main>
      <div className="wrapper">
        <section className="main-section">
          <h2>Конвертер валют</h2>
          <h3>Header</h3>
          <p>В header-е необходимо отображать актуальный курс валют (USD, EUR) по отношению к гривне (UAH)</p>
          <p>Актуальный курс валют должен приходить с любого публичного API</p>
          <h3>Компонент с конвертацией</h3>
          <p>Для одной валюты должен быть свой input и select.</p>
          <p>отдельный input + select для первой валюты, и отдельный input + select для второй валюты</p>
          <p>в select должно быть не менее трех валют - UAH, USD, EUR.</p>
          <p>конвертация должна происходить в обоих направлениях</p>
        </section>
      </div>
    </main>
  )
}

export default AboutPage