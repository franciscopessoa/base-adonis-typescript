/**
 * Custom messages for validation failures. You can make use of dot notation `(.)`
 * for targeting nested fields and array expressions `(*)` for targeting all
 * children of an array. For example:
 *
 * {
 *   'profile.username.required': 'Username is required',
 *   'scores.*.number': 'Define scores as valid numbers'
 * }
 *
 */
export default class BaseMessagesValidator {
  public messages = {
    'required': 'O campo {{ field }} é obrigatório',
    'string': 'O campo {{ field }} deve ter o formato texto',
    'boolean': 'O campo {{ field }} deve ser boleano',
    'number': 'O campo {{ field }} deve ser numérico',
    'date.format': 'O campo {{ field }} deve ser do tipo data',
    'regex': 'Valor incorreto para o campo: {{ field }}',
    'enum': "O campo {{ field }} deve ser '{{ options.choices }}'",
    'object': 'O campo {{ field }} deve ser um json',
    'exists': 'O registro de {{ field }} não existe',
    'range': 'O campo {{ field }} deve ser entre {{ options.start }} e {{ options.stop }}',
    'unique': 'O campo {{ field }} deve ser único',
    'maxLength': 'O campo {{ field }} deve conter no máximo {{ options.maxLength }} caracteres',
    'minLength': 'O campo {{ field }} deve conter no mínimo {{ options.minLength }} caracteres',
    'array': 'Formato inválido para o campo: {{ field }}',
  }
}
