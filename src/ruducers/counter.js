import { INCREMENT } from '../constants'

export default (currentNumber = 0, action) => {
    const { type, data } = action
    switch (type) {
        case INCREMENT: return currentNumber - 1

        default: return currentNumber
    }
}