import { ResponseContract } from '@ioc:Adonis/Core/Response'
import Env from '@ioc:Adonis/Core/Env'

export const success = (response: ResponseContract, data: object, message: string = ''): void => {
  return response.status(200).json({ message: message, data: data })
}

export const noContent = (response: ResponseContract): void => {
  return response.noContent()
}

export const validationError = (response: ResponseContract, errors: object): void => {
  return response.status(422).json({ message: '', data: errors })
}

export const handleErrorResponse = (response: ResponseContract, data: any): void => {
  const { status, message } = data
  if (Env.get('NODE_ENV') === 'development') {
    console.log(data)
  }

  if (status === 400) {
    return badRequest(response, message)
  }
  return serverError(response)
}

const serverError = (
  response: ResponseContract,
  message: string = 'Erro interno no servidor'
): void => {
  return response.status(500).json({ message: message, data: null })
}

const badRequest = (response: ResponseContract, message: string): void => {
  return response.status(400).json({ message: message, data: [] })
}
