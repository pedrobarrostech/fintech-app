import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useSpring, animated as a } from 'react-spring'
import { getDispatchers } from '../../store/dispatcher/actions'
import { saveLoan, clearMessage } from '../../store/loan/actions'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Radio from '../../components/Radio'
import SubmitButton from '../../components/SubmitButton'
import ToastMessage from '../../components/ToastMessage/ToastMessage'
import './User.scss'

const User = () => {
  const animation = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    delay: 600
  })
  const { handleSubmit, register, errors } = useForm({
    submitFocusError: true
  })
  const [gender, setGender] = useState('')
  const dispatchers = useSelector(state => state.dispatchers.dispatchers)
  const message = useSelector(state => state.loan.message)
  const dispatch = useDispatch()

  useEffect(() => {
    getDispatchers(dispatch)
  }, [dispatch])

  const handleGenderChange = (event) => {
    setGender(event.currentTarget.value)
  }

  const onSubmit = (values, e) => {
    saveLoan(values, dispatch)
    setGender('')
    e.target.reset()
  }

  const renderMessage = () => {
    if (message) {
      return <ToastMessage onClick={() => clearMessage(dispatch)} message='Usuário inserido com sucesso' />
    }
  }

  return (
    <a.section style={ animation } className='user'>
      <div className="user__form">
        <h1 className="user__form__title">Dados pessoais</h1>
        { renderMessage() }
        <form name='user' onSubmit={handleSubmit(onSubmit)}>
          <div className='user__form__document'>
            <div className='user__form__document__field'>
              <Input
                name='rg'
                label='Número de RG'
                placeholder='42 038 121 - 1'
                mask='00 000 000 - 0'
                hasError={errors.rg}
                inputMode='numeric'
                register={register}
                validations={{ required: true, minLength: 12 }}
              />
            </div>
            <div className="user__form__separator">-</div>
            <div className='user__form__document__field'>
              <Input
                name='emission'
                label='Emissão'
                mask='00/00/0000'
                placeholder='25/04/2009'
                hasError={errors.emission}
                inputMode='numeric'
                register={register}
                validations={{ required: true, pattern: /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/ }}
              />
            </div>
            <div className="user__form__separator">-</div>
            <div className='user__form__document__field'>
              <Select
                options={dispatchers}
                name='dispatcher'
                label='Órgão Expedidor'
                hasError={errors.dispatcher}
                register={register}
                required
              />
            </div>
          </div>
          <div className="user__form__gender">
            <div className={`user__form__gender__label ${errors.gender ? 'error' : ''}`}>Sexo</div>
            <div className="user__form__gender__radios">
              <Radio
                activeItem={gender}
                name='gender'
                value='M'
                label='Masculino'
                hasError={errors.gender}
                onChange={handleGenderChange}
                register={register}
                required
              />
              <div className="user__form__gender__separator">-</div>
              <Radio
                activeItem={gender}
                name='gender'
                value='F'
                label='Feminino'
                hasError={errors.gender}
                onChange={handleGenderChange}
                register={register}
                required
              />
            </div>
          </div>
          <div className="user__form__submit">
            <SubmitButton
              name='submit'
              disabled={Object.entries(errors).length > 0}
              label='Continuar'
            />
          </div>
        </form>
      </div>
    </a.section>
  )
}

export default User
