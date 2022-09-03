export type RequestOptions = {
    method?: string
    body?: any
    headers?: { string: string }
}

export const useFetch = async (
    url: string,
    { method, body, headers }: RequestOptions
) => {
    let response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers
    })

    let data = await response.json()
    return data
}
