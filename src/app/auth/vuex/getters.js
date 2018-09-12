import { isEmpty } from 'lodash'

export const isLogger = ({ token }) => !isEmpty(token)
