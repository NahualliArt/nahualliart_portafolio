import React from "react";

function Home() {
return (
<>
<div className="container-home">
      <div className="one-column">
        <div className="intro">
          <div>
            <h4>ESTOY EN</h4>
            <h2>Guadalajara, Mx.</h2>
          </div>
          <div>
            <h4>ACTUALMENTE TRABAJO EN</h4>
            <h2>BYP, UI Head Designer</h2>
            <h2>BIZBUD, Senior digital designer</h2>
          </div>
        </div>

        <div className="info">
          <p>
            Me apasionan los retos y estar siempre aprendiendo cosas nuevas. Si
            me definiera a mi misma diría que soy una interesante combinación
            entre diseño, desarrollo, tecnología y arte.
          </p>
          <p>
            Soy una artista que se dio una vuelta por el diseño de interfaces
            hace algunos años, he colaborado en el diseño de multiples
            proyectos, y trabajado con clientes de varias partes del mundo, como
            USA, Colombia y México.
          </p>
          <p>
            Todos los proyectos son una oportunidad única de aprender nuevas
            cosas y una excelente manera de abrir horizontes.
          </p>
        </div>
      </div>

      <div className="two-column">
        <div className="imagen"></div>
        <newmoremenu />
      </div>

      <div className="name">
        <h1>Abigail Pérez</h1>
        <h3>UI DESIGNER & FREELANCER</h3>
      </div>
    </div>

</>

)
}

export default Home;