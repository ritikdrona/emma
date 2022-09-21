import { redirect, RedirectFunction } from 'react-router-dom'

const redirectWithDelay = (
    url: string,
    init?: number | ResponseInit,
    delayInMilliseconds?: number
): void => {
    const timeout = setTimeout(() => {
        redirect(url, init)
        clearTimeout(timeout)
    }, delayInMilliseconds)
}

export const executeAfterDelay = (
    func: Function,
    delayInMilliseconds?: number
) => {
    const timeout = setTimeout(() => {
        func()
        clearTimeout(timeout)
    }, delayInMilliseconds)
}
