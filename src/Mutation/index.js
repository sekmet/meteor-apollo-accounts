import loginWithPassword from './loginWithPassword'
import logout from './logout'
import changePassword from './changePassword'
import createUser from './createUser'
import verifyEmail from './verifyEmail'
import resendVerificationEmail from './resendVerificationEmail'
import setPassword from './setPassword'
import forgotPassword from './forgotPassword'
import resetPassword from './resetPassword'
import oauth from './oauth'
import hasService from './oauth/hasService'

const resolvers = {
  logout,
  verifyEmail,
  resendVerificationEmail,
  ...oauth
}

if (hasService('password')) {
  resolvers.loginWithPassword = loginWithPassword
  resolvers.changePassword = changePassword
  resolvers.createUser = createUser
  resolvers.forgotPassword = forgotPassword
  resolvers.setPassword = setPassword
  resolvers.resetPassword = resetPassword
}

export default function (options) {
  return {Mutation: resolvers}
}
