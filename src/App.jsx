import React, { useState, useEffect } from 'react'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTarefas(dados)
        setCarregando(false)
      })
  }, [])

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          <div className="card shadow">
            <div className="card-body">

              <h2 className="card-title text-center mb-3">
                Tarefas vindas da API
              </h2>

              <p className="text-center text-muted">
                Consumindo dados de JSONPlaceholder via fetch e useEffect
              </p>

              {carregando ? (
                <div className="text-center my-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Carregando...</span>
                  </div>
                  <p className="mt-2">Carregando...</p>
                </div>
              ) : (
                <ul className="list-group mt-4">
                  {tarefas.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>{item.title}</span>

                      <span
                        className={`badge ${item.completed
                            ? 'bg-success'
                            : 'bg-warning text-dark'
                          }`}
                      >
                        {item.completed ? 'Concluído' : 'Pendente'}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App