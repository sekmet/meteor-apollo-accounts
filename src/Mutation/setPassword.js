import callMethod from '../callMethod'

export default async function (root, {id, newPassword}, context) {
    return callMethod(context, 'setPassword', id, newPassword)
}
