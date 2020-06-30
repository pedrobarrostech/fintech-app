import React, { useEffect } from 'react'
import { useSpring, animated as a } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'
import { getLoans, deleteLoan } from '../../store/loan/actions'
import './List.scss'

const List = () => {
  const animation = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 600
  })
  const loans = useSelector(state => state.loan.loans)
  const dispatch = useDispatch()

  useEffect(() => {
    getLoans(dispatch)
  }, [dispatch])

  const handleDelete = (loan) => {
    deleteLoan(loan, dispatch)
  }

  return (
    <a.section style={ animation } className="user-list">
      <div className="user-list__container">
        <h1 className="user-list__title">
          <i className="fas fa-user"></i>  Lista de Pessoas
        </h1>
        <table className="user-list__table">
          <thead>
            <tr>
              <th scope="col">Rg</th>
              <th scope="col">Emissao</th>
              <th scope="col">Órgão</th>
              <th scope="col">Sexo</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {loans.map(l =>
              <tr key={l.id}>
                <td>{l.rg}</td>
                <td>{l.emission}</td>
                <td>{l.dispatcher}</td>
                <td>{l.gender}</td>
                <td>
                  <button onClick={() => handleDelete(l)} className="user-list__table__button">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </a.section>
  )
}

export default List
